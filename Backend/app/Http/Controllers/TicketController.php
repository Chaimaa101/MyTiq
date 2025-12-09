<?php

namespace App\Http\Controllers;

use App\Events\TicketCanceled;
use App\Events\TicketCreated;
use App\Models\Ticket;
use App\Models\Event;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
    public function index()
    {
        try {
            $tckets =  Ticket::with('event', 'user')->get();
               return response()->json([
            'data'    => $tckets
        ], 200);
        } catch (\Exception $e) {
             return [
                'error' => $e->getMessage()
            ];
        }
    }     
    
    public function myTickets(Request $request)
    {
        try {
            return  $request->user()->tickets()->with('event','user')->get();
             
        } catch (\Exception $e) {
             return [
                'error' => $e->getMessage()
            ];
        }
    }

    /**
     * Store a newly created resource in storage.
     */

public function store(Request $request, Event $event)
{
    try {
        $user = $request->user();

        if ($event->capacity <= 0) {
            return response()->json([
                "message" => "Les billets pour cet événement sont épuisés !"
            ], 422);
        }

        // Prepare a transient ticket array (not saved to DB)
        $ticketData = [
            'id' => null,
            'event_id' => $event->id,
            'user_id' => $user->id,
            'date' => now()->toDateTimeString(),
            'code' => strtoupper(uniqid('TKT-')), // optional ticket code
        ];

        // Render PDF from a Blade view (resources/views/tickets/ticket_pdf.blade.php)
        $pdf = Pdf::loadView('tickets.ticket_pdf', [
            'ticket' => (object) $ticketData, // view may expect object
            'event' => $event,
            'user'  => $user,
        ]);

        // Option 1: display inline in browser (user sees PDF in new tab)
        // return $pdf->stream('ticket.pdf');

        // Option 2: force download
        return $pdf->download('ticket.pdf');

        // (No file is stored)
    } catch (\Exception $e) {
        return response()->json([
            'error' => $e->getMessage()
        ], 500);
    }
}

    /**
     * Display the specified resource.
     */
    public function show(Ticket $ticket)
    {
         try {
            return $ticket;
             
        } catch (\Exception $e) {
             return [
                'error' => $e->getMessage()
            ];
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( Event $event, Ticket $ticket)
    {
          try {
            $ticket->delete();

            event(new TicketCanceled($ticket));

            return [
                'message' => 'ticket deleted successfully',
            ];
        } catch (\Exception $e) {
            return [
                'error' => $e->getMessage()
            ];
        }
    }
}
