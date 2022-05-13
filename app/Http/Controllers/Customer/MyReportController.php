<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Customer;
use App\Models\Project;
use Illuminate\Http\Request;

class MyReportController extends Controller
{
    private function data()
    {
        $customer = UtilController::get(request());

        $total = $customer->forms()->whereNotNull('body')->count();
        $approved = $customer->forms()->whereStatus(2)->count();
        $pending = $customer->forms()->whereStatus(0)->whereNotNull('body')->count();
        $rejected = $customer->forms()->whereStatus(1)->count();

        $blocksData = [
            'total' => $total,
            'approved' => $approved,
            'rejected' => $rejected,
            'accuracy' => $total > 0 ? round($approved * 100 / $total) : 0,
        ];

        $generalWorkReport = [
            'total' => $total,
            'increase' => 3,
        ];

        $generalWorkReportTrackerData = [];
        $names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        $totalForms = [80, 129, 106, 164, 148, 129, 214, 152, 106, 180, 126, 48];
        $rejectedForms = [0, 41, 10, 33, 50, 23, 69, 48, 23, 86, 64, 23];
        for ($i = 0; $i < count($names); $i++) {
            $generalWorkReportTrackerData[] = [
                'name' => strtoupper($names[$i]),
                'Approved Forms' => $totalForms[$i] - $rejectedForms[$i],
                'Rejected Forms' => $rejectedForms[$i],
            ];
        }

        $financialReportTrackerData = [
            ['name' => 'Available Balance', 'value' => 385],
            ['name' => 'Withdrawals', 'value' => 135],
        ];

        $workReport = [
            'approved' => $total > 0 ? round($approved * 100 / $total) : 0,
            'pending' => $total > 0 ? round($pending * 100 / $total) : 0,
            'rejected' => $total > 0 ? round($rejected * 100 / $total) : 0,
        ];

        $projects = [];
        foreach (Project::all() as $project) {
            $submitted_forms = $customer->forms()->whereProjectId($project->id)->whereNotNull('body')->count();
            $approved_forms = $customer->forms()->whereProjectId($project->id)->whereStatus(2)->count();
            $rejected_forms = $customer->forms()->whereProjectId($project->id)->whereStatus(1)->count();

            $projects[] = [
                'number' => $project->number,
                'submitted_forms' => $submitted_forms,
                'approved_forms' => $approved_forms,
                'rejected_forms' => $rejected_forms,
                'expected_payment' => 0,
                'payment' => $submitted_forms > 0 ? 0 : 1,
            ];
        }

        return [
            'blocksData' => $blocksData,
            'generalWorkReport' => $generalWorkReport,
            'generalWorkReportTrackerData' => $generalWorkReportTrackerData,
            'financialReportTrackerData' => $financialReportTrackerData,
            'workReport' => $workReport,
            'projects' => $projects,
        ];
    }



    public function  index()
    {
        return response()->json($this->data());
    }
}
