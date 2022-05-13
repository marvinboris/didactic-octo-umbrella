<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Role;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CustomerController extends Controller
{
    private $rules = [
        'email' => 'required|string|email',
        'name' => 'required|string',
        'password' => 'required|string|confirmed',
        'photo' => 'nullable|image',
        'phone' => 'required|string',
        'is_active' => 'required|integer',
    ];



    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $customers = [];
        $filteredData = Customer::orderBy('id');

        $filteredData = $filteredData
            ->select('customers.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('customers.name', 'LIKE', "%$search%")
                        ->orWhere('customers.email', 'LIKE', "%$search%")
                        ->orWhere('customers.phone', 'LIKE', "%$search%")
                        ->orWhere('customers.photo', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $customer) {
            $customers[] = array_merge($customer->toArray(), []);
        }

        return [
            'customers' => $customers,
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

        $customer = Customer::find($id);
        if (!$customer) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['customers']['not_found'], 'danger'),
        ]);

        return response()->json([
            'customer' => $customer,
        ] + $this->information());
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate(array_merge($this->rules, [
            'email' => 'required|string|email|unique:customers',
        ]));

        $input = $request->except('photo');

        $input['phone'] = '237' . $input['phone'];
        $input['password'] = Hash::make($input['password']);
        $input['language_id'] = 1;

        if ($file = $request->file('photo')) {
            $fileName = UtilController::resize($file, 'agency-admins');
            $input['photo'] = htmlspecialchars($fileName);
        }

        Customer::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['customers']['created'], 'success'),
        ] + $this->data());
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $customer = Customer::find($id);
        if (!$user) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['customers']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;
        if ($request->email === $customer->email) $rules['email'] = 'required|email';
        if (!$request->password) $rules['password'] = 'nullable|string|confirmed';

        $request->validate($rules);

        $input = $request->except(['password', 'photo']);
        if ($request->password) $input['password'] = Hash::make($request->password);

        if ($file = $request->file('photo')) {
            if ($customer->photo && is_file($customer->photo)) unlink($customer->photo);
            $fileName = UtilController::resize($file, 'agency-admins');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $customer->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['customers']['updated'], 'success'),
            'customer' => $customer,
        ] + $this->information() + $this->data());
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $customer = Customer::find($id);
        if (!$user) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['customers']['not_found'], 'danger'),
        ]);

        if ($customer->photo && is_file($customer->photo)) unlink($customer->photo);
        $customer->delete();

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['customers']['deleted'], 'success'),
        ] + $this->data());
    }
}
