<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Customer;
use Illuminate\Http\Request;

class WithdrawController extends Controller
{
    private function data()
    {
        $customer = UtilController::get(request());

        $withdrawals = [
            ['created_at' => now(), 'method' => 'PayPal', 'amount' => 140, 'balance_before' => '$540', 'balance_after' => 400, 'location' => 'Douala - CM', 'status' => 'Completed'],
            ['created_at' => now(), 'method' => 'Mobile Money', 'amount' => 10, 'balance_before' => '$400', 'balance_after' => 390, 'location' => 'Douala - CM', 'status' => 'Completed'],
            ['created_at' => now(), 'method' => 'Mobile Money', 'amount' => 10, 'balance_before' => '$390', 'balance_after' => 380, 'location' => 'Douala - CM', 'status' => 'Completed'],
            ['created_at' => now(), 'method' => 'Mobile Money', 'amount' => 20, 'balance_before' => '$380', 'balance_after' => 360, 'location' => 'Douala - CM', 'status' => 'Completed'],
            ['created_at' => now(), 'method' => 'Mobile Money', 'amount' => 100, 'balance_before' => '$360', 'balance_after' => 260, 'location' => 'Douala - CM', 'status' => 'Completed'],
            ['created_at' => now(), 'method' => 'Mobile Money', 'amount' => 10, 'balance_before' => '$260', 'balance_after' => 250, 'location' => 'Douala - CM', 'status' => 'Completed'],
            ['created_at' => now(), 'method' => 'Mobile Money', 'amount' => 50, 'balance_before' => '$250', 'balance_after' => 200, 'location' => 'Douala - CM', 'status' => 'Completed'],
            ['created_at' => now(), 'method' => 'Mobile Money', 'amount' => 40, 'balance_before' => '$200', 'balance_after' => 160, 'location' => 'Douala - CM', 'status' => 'Completed'],
        ];
        
        $availableBalanceTrackerData = [
            ['name' => 'Available Balance', 'value' => 385],
            ['name' => 'Withdrawals', 'value' => 135],
        ];

        $total = count($withdrawals);

        return [
            'withdrawals' => $withdrawals,
            'availableBalanceTrackerData' => $availableBalanceTrackerData,
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
