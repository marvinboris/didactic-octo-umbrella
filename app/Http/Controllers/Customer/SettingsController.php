<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Language;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SettingsController extends Controller
{
    public function information()
    {
        $customer = UtilController::get(request());

        return [
            'customer' => $customer,
        ];
    }

    public function index()
    {
        $information = $this->information();

        return response()->json($information);
    }

    public function save(Request $request)
    {
        $cms = UtilController::cms();
        $customer = UtilController::get(request());

        $input = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'country' => 'nullable|string',
            'city' => 'nullable|string',
            'address' => 'nullable|string',
            'phone' => 'nullable|numeric',
            'photo' => 'nullable|file|image',
        ]);

        if ($file = $request->file('photo')) {
            if ($customer->photo && is_file(public_path($customer->photo))) unlink(public_path($customer->photo));
            $fileName = UtilController::resize($file, 'customers');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $customer->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$customer->language->abbr]['messages']['settings'], 'success'),
        ] + $this->information());
    }
}
