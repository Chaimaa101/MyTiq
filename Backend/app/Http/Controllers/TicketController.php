<?php

namespace App\Http\Controllers;

use App\Events\TicketCanceled;
use App\Events\TicketCreated;
use App\Models\Ticket;
use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;
use App\Models\Event;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
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
 public function store(StoreTicketRequest $request, Event $event)
{
    try {
        $user = $request->user();

        if($event->capacity == 0){
            return [
                "message" => "les sont 3emrou"
            ];
        }else{
             $ticket = $user->tickets()->create([
            'event_id' => $event->id,
            'date'     => now(),
        ]);

        
        $pdf = Pdf::loadView('tickets.pdf', [
            'ticket' => $ticket,
            'event' => $event,
            'user' => $user,
        ]);
        
        $pdfPath = 'tickets/ticket_'.$ticket->id.'.pdf';
        Storage::put($pdfPath, $pdf->output());
        
        $ticket->update(['pdf_path' => $pdfPath]);
        
        event(new TicketCreated($ticket));

        return response()->json([
            'message' => 'Ticket created successfully!',
            'ticket'  => $ticket
        ], 201);
        }
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
