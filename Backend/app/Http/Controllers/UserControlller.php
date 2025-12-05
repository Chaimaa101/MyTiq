<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class UserController extends Controller
{
    
    public function index()
    {
        $users = User::all();
        return $users;
    }

   
    public function show(User $user)
    {
        return $user;
    }

    public function update(Request $request, User $user)
    {
        try{
             $validated = $request->validate([
            'role' => 'sometimes|in:membre,admin',
        ]);

        $user->update($validated);

        return [
            'message' => 'Utilisateur mis à jour avec succès',
            'user' => $user
        ];
        }catch(Exception $e){
            return [
            'error' => $e->getMessage()
            ];
        }
       
    }
   
    public function destroy(User $user)
    {
        try {
            $user->delete();

        return response()->json([
            'message' => 'Utilisateur supprimé avec succès'
        ]);
        
        } catch (Exception $e) {
              return [
            'error' => $e->getMessage()
            ];
        }
    }

}
