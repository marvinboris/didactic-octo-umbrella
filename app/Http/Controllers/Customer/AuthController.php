<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Mail\VerificationLink;
use App\Models\Customer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function username()
    {
        return 'token';
    }

    protected function guard()
    {
        return Auth::guard('customer');
    }

    public function login(Request $request)
    {
        $request->validate([
            'token' => 'required|string|exists:customers',
            'password' => 'required|string',
        ]);

        $customer = Customer::whereToken($request->input('token'))->first();

        if ($customer->is_active === 0) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Your account is not active. Please, contact the administrator.'
            ]
        ], 403);

        if (!Hash::check($request->password, $customer->password))
            return response()->json([
                'message' => [
                    'type' => 'danger',
                    'content' => 'Incorrect token ID or password.'
                ]
            ], 401);

        $tokenResult = $customer->createToken(Customer::personalAccessToken());
        $token = $tokenResult->token;
        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'userData' => $customer->toArray() + [
                'notifications' => $customer->notifications()->latest()->limit(5)->get(),
                'language' => $customer->language->abbr,
            ]
        ]);
    }
}
