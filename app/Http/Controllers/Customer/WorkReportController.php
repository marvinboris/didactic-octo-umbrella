<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Customer;
use Illuminate\Http\Request;

class WorkReportController extends Controller
{
    private function data()
    {
        $customer = UtilController::get(request());

        $stats = [
            'submitted_forms' => 198,
            'approved_forms' => 156,
            'rejected_forms' => 42,
            'expected_payment' => 56.34,
            'payment' => 0,
        ];

        $example_body = [
            [
                'form_number' => '<B>Ytn842zuktnt<B>',
                'company_code' => 'Data Not Available',
                'company_name' => '<R>Air China Company Company<R>'
            ],
        ];

        $forms = [
            ['number' => 78, 'status' => 2, 'customer' => '@tsalma546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 700, 'status' => 2, 'customer' => '@telemanila546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 200, 'status' => 1, 'customer' => '@tsalma546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 206, 'status' => 1, 'customer' => '@telemanila546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 34, 'status' => 2, 'customer' => '@tsalma546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 230, 'status' => 1, 'customer' => '@tsalma546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 78, 'status' => 2, 'customer' => '@telemanila546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 78, 'status' => 2, 'customer' => '@tsalma546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 700, 'status' => 2, 'customer' => '@telemanila546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 200, 'status' => 1, 'customer' => '@tsalma546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 206, 'status' => 1, 'customer' => '@telemanila546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 34, 'status' => 2, 'customer' => '@tsalma546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 230, 'status' => 1, 'customer' => '@tsalma546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 78, 'status' => 2, 'customer' => '@telemanila546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 78, 'status' => 2, 'customer' => '@tsalma546', 'body' => $example_body, 'updated_at' => now()],
            ['number' => 700, 'status' => 2, 'customer' => '@telemanila546', 'body' => $example_body, 'updated_at' => now()],
        ];

        return [
            'stats' => $stats,
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
}
