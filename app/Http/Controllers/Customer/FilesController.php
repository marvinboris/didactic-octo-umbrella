<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Customer;
use Illuminate\Http\Request;

class FilesController extends Controller
{
    private function data()
    {
        $customer = UtilController::get(request());

        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;
        $elements_per_page = 16;

        $total = 0;

        $forms = [];
        $filteredData = $customer->forms()->orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('forms.body', 'LIKE', "%$search%")
                        ->orWhere('forms.number', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        switch ($show) {
            case 'Pending':
                $filteredData = $filteredData->whereStatus(0)->whereNotNull('body');
                break;
            case 'Approved':
                $filteredData = $filteredData->whereStatus(2);
                break;
            case 'Rejected':
                $filteredData = $filteredData->whereStatus(1);
            case 'Reserved':
                $filteredData = $filteredData->whereStatus(0)->whereNull('body')->whereNotNull('customer_id');
                break;
        }

        $filteredData = $filteredData->skip(($page - 1) * $elements_per_page)->take($elements_per_page);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $form) {
            $forms[] = $form->toArray();
        }

        $selectedProjects = [];
        foreach ($customer->forms as $form) {
            if (in_array($form->project->number, $selectedProjects)) $selectedProjects[] = $form->project->number;
        }

        return [
            'forms' => $forms,
            'total' => $total,
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
}
