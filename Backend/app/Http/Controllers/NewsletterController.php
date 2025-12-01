<?php

namespace App\Http\Controllers;

use App\Events\NewsletterSubscribed;
use App\Models\Newsletter;
use App\Http\Requests\StoreNewsletterRequest;
use App\Http\Requests\UpdateNewsletterRequest;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{

    /**
     * Show the form for creating a new resource.
     */
    public function abonner( Request $request)
    {
        
        $request->validate([
            'email' => 'required|email|unique:newsletters,email'
        ]);

       $newsletter = Newsletter::create([
            'email' => $request->email,
            'confirmed' => true 
        ]);

          event(new NewsletterSubscribed($newsletter->email));

        return response()->json(['message' => 'Subscribed successfully!']);
    }

    
    /**
     * Remove the specified resource from storage.
     */
    public function desabonner(Request $request )
    {
          $request->validate([
            'email' => 'required|email|exists:newsletters,email'
        ]);

        Newsletter::where('email', $request->email)->delete();

        return response()->json(['message' => 'Unsubscribed successfully!']);
    }
    
}
