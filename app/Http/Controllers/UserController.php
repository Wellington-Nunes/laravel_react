<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function login()
    {
        return Inertia::render('Pages/Login', []);
    }

    public function auth(Request $request)
    {
        $request->validate([
            'email' => ['email', 'required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            return redirect()->route('home');
        }

        return redirect()->back()->withErrors(['errors' => ['Usuário não encontrado!']]);
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('home');
    }

    public function register()
    {
        return Inertia::render('Pages/Register', []);
    }

    public function createUser(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['email', 'unique:users,email', 'required'],
            'password' => ['min:8', 'max:25', 'required', 'confirmed'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Auth::login($user);

        return redirect()->route('home');
    }
}
