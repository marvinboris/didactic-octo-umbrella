<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Form;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $total = Form::count();
        $approved = Form::whereStatus(2)->count();
        $project = 940;
        $payment_in = 143.54;
        $payment_out = 243.97;
        
        $generalReport = [
            'total' => 435,
            'increase' => 3,
        ];

        $generalReportTrackerData = [];
        $names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        $totalForms = [80, 129, 106, 164, 148, 129, 214, 152, 106, 180, 126, 48];
        $rejectedForms = [0, 41, 10, 33, 50, 23, 69, 48, 23, 86, 64, 23];
        for ($i = 0; $i < count($names); $i++) {
            $generalReportTrackerData[] = [
                'name' => strtoupper($names[$i]),
                'Approved Forms' => $totalForms[$i] - $rejectedForms[$i],
                'Rejected Forms' => $rejectedForms[$i],
            ];
        }

        $rankingBoard = [
            [
                'author' => ['at' => '@stevorevko', 'photo' => 'https://dummyimage.com/100.png/09f/fff'],
                'total' => 222,
                'approved' => 210,
                'pending' => 4,
                'rejected' => 8,
                'rank' => 1,
            ],
            [
                'author' => ['at' => '@stacy445', 'photo' => 'https://dummyimage.com/100.png/09f/fff'],
                'total' => 210,
                'approved' => 194,
                'pending' => 6,
                'rejected' => 10,
                'rank' => 2,
            ],
            [
                'author' => ['at' => '@Marcello84', 'photo' => 'https://dummyimage.com/100.png/09f/fff'],
                'total' => 204,
                'approved' => 184,
                'pending' => 8,
                'rejected' => 12,
                'rank' => 3,
            ],
        ];

        return response()->json([
            'blocksData' => [
                'total' => $total,
                'approved' => $approved,
                'project' => $project,
                'payment_in' => $payment_in,
                'payment_out' => $payment_out,
            ],
            'generalReport' => $generalReport,
            'generalReportTrackerData' => $generalReportTrackerData,
            'rankingBoard' => $rankingBoard,
        ]);
    }
}
