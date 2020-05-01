<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {

//       dd($request);

        $validatedData = $request->validate([
            'name' => 'required|max:55',
            'email' => 'email|required|unique:users',
            'password' => 'required|confirmed'
        ]);

        $validatedData['password'] = bcrypt($request->password);

//        dd($request->password);

        $user = User::create($validatedData);
        $accessToken = $user->createToken('authToken')->accessToken;
        return response()->json(['user' => $user,'access_token' => $accessToken]);
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($loginData)){
            return response()->json(['message' => 'Invalid credentials']);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        return response()->json(['user' => auth()->user(),'access_token' => $accessToken]);
    }
}
