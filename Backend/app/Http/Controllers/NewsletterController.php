<?php

namespace App\Http\Controllers;

use App\Events\NewsletterSubscribed;
use App\Models\Newsletter;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{

    public function index()
    {
        try {
            return Newsletter::all();
        } catch (\Exception $e) {
            return [
                'error' => $e->getMessage()
            ];
        }
    }

    public function abonner(Request $request)
    {
        try {

            $request->validate([
                'email' => 'required|email|unique:newsletters,email'
            ]);

            $newsletter = Newsletter::create([
                'email' => $request->email,
                // 'confirmed' => true
            ]);

            // event(new NewsletterSubscribed($newsletter->email));

            return response()->json(['message' => 'Subscribed successfully!']);
        } catch (\Exception $e) {
            return [
                'error' => $e->getMessage()
            ];
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function desabonner(Request $request)
    {
        try {

            $request->validate([
                'email' => 'required|email|exists:newsletters,email'
            ]);

            Newsletter::where('email', $request->email)->delete();

            return response()->json(['message' => 'Unsubscribed successfully!']);

        } catch (\Exception $e) {
            return [
                'error' => $e->getMessage()
            ];
        }
    }
}
