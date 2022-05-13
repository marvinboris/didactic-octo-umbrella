<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Customer;
use App\Models\Form;
use App\Models\Plan;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $customer = UtilController::get(request());

        // Blocks Data
        $blocksData = [
            'total' => Form::count(),
            'approved' => Form::whereStatus(2)->count(),
            'project' => 940,
            'balance' => $customer->balance,
            'days_left' => 2,
        ];

        // Recent Forms
        $recentForms = Form::orderBy('id', 'desc')->limit(3)->get();

        // Data Overview
        $dataOverview = [
            'total' => Form::count(),
            'approved' => Form::whereStatus(2)->count(),
            'pending' => Form::whereStatus(0)->whereNotNull('body')->count(),
            'rejected' => Form::whereStatus(1)->count(),
        ];

        // Ranking Board
        $forms = [];
        foreach (Customer::all() as $customer) {
            $forms[] = [
                'author' => ['at' => $customer->at, 'photo' => $customer->photo],
                'total' => $customer->forms()->count(),
                'approved' => $customer->forms()->whereStatus(2)->count(),
                'pending' => $customer->forms()->whereNotNull('body')->count(),
                'rejected' => $customer->forms()->whereStatus(1)->count(),
            ];
        }
        usort($forms, function ($a, $b) {
            if ($a['total'] == $b['total']) {
                if ($a['approved'] == $b['approved']) return 0;
                return ($a['approved'] < $b['approved']) ? 1 : -1;
            }
            return ($a['total'] < $b['total']) ? 1 : -1;
        });
        $rankingBoard = array_filter($forms, function ($form, $index) {
            return $index < 3;
        }, ARRAY_FILTER_USE_BOTH);

        return response()->json([
            'blocksData' => $blocksData,
            'recentForms' => $recentForms,
            'dataOverview' => $dataOverview,
            'rankingBoard' => $rankingBoard,
        ]);
    }
}
