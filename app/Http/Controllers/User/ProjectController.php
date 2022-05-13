<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Form;
use App\Models\Role;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProjectController extends Controller
{
    private $rules = [
        'files.*' => 'required|file',
    ];



    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $projects = [];
        $filteredData = Project::orderBy('id');

        $filteredData = $filteredData
            ->select('projects.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('projects.number', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $project) {
            $projects[] = array_merge($project->toArray(), [
                'total_forms' => $project->forms()->count(),
                'submitted' => $project->forms()->whereActive(1)->count(),
                'approved' => $project->forms()->whereStatus(2)->count(),
                'pending' => $project->forms()->whereStatus(0)->whereNotNull('body')->count(),
                'rejected' => $project->forms()->whereStatus(1)->count(),
            ]);
        }

        return [
            'projects' => $projects,
            'total' => $total,
        ];
    }

    private function information()
    {
        return [];
    }



    public function index()
    {
        return response()->json($this->data());
    }

    public function info()
    {
        return response()->json($this->information());
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $project = Project::find($id);
        if (!$project) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['projects']['not_found'], 'danger'),
        ]);

        return response()->json([
            'project' => $project,
        ] + $this->information());
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $files = $request->file('files');
        if (count($files) === 0) response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['projects']['no_file'], 'danger'),
        ]);

        $projectNumber = Project::generateNumber();
        $project = Project::create([
            'number' => $projectNumber,
        ]);
        mkdir(public_path($project->directory));

        $formNumber = 1;
        foreach ($files as $file) {
            $fileName = $file->getClientOriginalName();
            $file->move($project->directory, $fileName);
            Form::create([
                'project_id' => $project->id,
                'number' => $formNumber,
                'file' => htmlspecialchars($fileName),
            ]);
            $formNumber++;
        }

        return response()->json([
            // 'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['projects']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $project = Project::find($id);
        if (!$project) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['projects']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;

        $request->validate($rules);

        $input = $request->except(['files']);

        $project->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['projects']['updated'], 'success'),
            'project' => $project,
        ] + $this->information() + $this->data());
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $project = Project::find($id);
        if (!$project) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['projects']['not_found'], 'danger'),
        ]);

        foreach ($project->forms as $form) {
            if (is_file(public_path($form->file))) unlink(public_path($form->file));
            $form->delete();
        }
        if (is_dir(public_path($project->directory))) rmdir(public_path($project->directory));
        $project->delete();

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['projects']['deleted'], 'success'),
        ] + $this->data());
    }
}
