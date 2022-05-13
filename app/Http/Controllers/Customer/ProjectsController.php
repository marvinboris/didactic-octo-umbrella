<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Customer;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    private function data()
    {
        $projects = Project::all();

        $forms = [];
        $selectedProjects = [];
        foreach ($projects as $project) {
            if ($project->status === 1) {
                $forms = array_merge($forms, $project->forms()->whereActive(1)->get()->toArray());
                $selectedProjects[] = $project->number;
            }
        }

        return [
            'selectedProject' => ['number' => join(', ', $selectedProjects)],
            'projects' => $projects,
            'forms' => $forms,
        ];
    }



    public function  index()
    {
        return response()->json($this->data());
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $customer = UtilController::get(request());

        $request->validate([
            'phone' => 'required|exists:customers'
        ]);

        $phone = $request->phone;

        $contacts = $customer->contacts;
        $new_contact = Customer::wherePhone($phone)->first();

        if (!in_array($new_contact->id, $contacts)) {
            $contacts[] = $new_contact->id;
            $customer->update([
                'contacts' => $contacts,
            ]);

            return response()->json([
                'message' => UtilController::message($cms['pages'][$customer->language->abbr]['messages']['contacts']['added'], 'success'),
            ]);
        } else return response()->json([
            'message' => UtilController::message($cms['pages'][$customer->language->abbr]['messages']['contacts']['already'], 'danger'),
        ]);
    }

    public function getForm($projectNumber, $formNumber)
    {
        $cms = UtilController::cms();
        $customer = UtilController::get(request());

        $project = Project::whereNumber($projectNumber)->first();
        if (!$project) return response()->json([
            'message' => UtilController::message($cms['pages'][$customer->language->abbr]['messages']['projects']['not_found'], 'danger'),
        ]);

        $form = $project->forms()->whereNumber($formNumber)->first();
        if (!$form) return response()->json([
            'message' => UtilController::message($cms['pages'][$customer->language->abbr]['messages']['forms']['not_found'], 'danger'),
        ]);

        return response()->json([
            'form' => array_merge($form->toArray(), [
                'file' => url($form->file),
            ]),
        ]);
    }

    public function postForm(Request $request, $projectNumber, $formNumber)
    {
        $cms = UtilController::cms();
        $customer = UtilController::get(request());

        $project = Project::whereNumber($projectNumber)->first();
        if (!$project) return response()->json([
            'message' => UtilController::message($cms['pages'][$customer->language->abbr]['messages']['projects']['not_found'], 'danger'),
        ]);

        $form = $project->forms()->whereNumber($formNumber)->first();
        if (!$form) return response()->json([
            'message' => UtilController::message($cms['pages'][$customer->language->abbr]['messages']['forms']['not_found'], 'danger'),
        ]);

        $request->validate([
            'form.*.*' => 'nullable|string',
        ]);

        $form->update([
            'status' => 0,
            'body' => json_encode($request->form),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$customer->language->abbr]['messages']['forms']['updated'], 'success'),
            'form' => $form,
        ]);
    }
}
