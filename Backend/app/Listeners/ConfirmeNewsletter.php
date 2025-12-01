<?php

namespace App\Listeners;

use App\Events\NewsletterSubscribed;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class ConfirmeNewsletter
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(NewsletterSubscribed $event)
    {
        Mail::raw('Veuillez confirmer votre abonnement.', function ($message) use ($event) {
            $message->to($event->email)
                    ->subject("Confirmation Newsletter");
        });
    }
}
