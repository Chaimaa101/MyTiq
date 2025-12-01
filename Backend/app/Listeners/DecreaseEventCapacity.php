<?php

namespace App\Listeners;

use App\Events\TicketCanceled;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class DecreaseEventCapacity
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
    public function handle(TicketCanceled $event): void
    {
         $event->ticket->event->increment('capacity');
    }
}
