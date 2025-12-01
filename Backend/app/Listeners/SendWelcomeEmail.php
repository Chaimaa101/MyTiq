<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Mail\WelcomeUser;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendWelcomeEmail
{
    use Queueable;
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
    public function handle(UserRegistered $event)
    {
        Mail::to($event->user->email)
            ->send(new WelcomeUser($event->user));
    }
}
