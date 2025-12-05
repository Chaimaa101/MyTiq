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
            $tckets =  Ticket::all();
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
        
             $ticket = $user->tickets()->create([
            'event_id' => $event->id,
            'date'     => now(),
        ]);

        
        $pdf = Pdf::loadView('Tickets.ticket_pdf', [
            'ticket' => $ticket,
            'event' => $event,
            'user' => $user,
        ]);
        
        event(new TicketCreated($ticket));

        return response()->json([
            'message' => 'Ticket created successfully!',
            'ticket'  => $ticket
        ], 201);
        
    } catch (\Exception $e) {
        return response()->json([
            'error'   =>  $e->getMessage()
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
