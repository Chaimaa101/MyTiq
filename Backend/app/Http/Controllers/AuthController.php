<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        try {
            $infos = $request->validated();
            $user = User::create($infos);
            $token = $user->createToken($user->name)->plainTextToken;

            return [
                'message' => 'Inscription réussie.',
                'user' => $user,
                'token' => $token
            ];
        } catch (Exception $e) {
            return [
                'error' => $e->getMessage()
            ];
        }
    }

    public function login(LoginRequest $request)
    {
        try {
            $request->validated();

            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return [
                    'message' => 'Les informations sont incorrectes.'
                ];
            }

            $token = $user->createToken($user->name)->plainTextToken;

            return [
                'message' => 'Connexion réussie.',
                'user' => $user,
                'token' => $token
            ];
        } catch (Exception $e) {
            return [
                'error' => $e->getMessage()
            ];
        }
    }

    public function logout(Request $request)
    {
        try {
            $request->user()->tokens()->delete();

            return [
                'message' => 'Vous êtes déconnecté avec succès.'
            ];
        } catch (Exception $e) {
            return [
                'error' => $e->getMessage()
            ];
        }
    }

}