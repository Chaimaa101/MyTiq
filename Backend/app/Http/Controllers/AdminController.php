<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Newsletter;
use App\Models\Ticket;
use App\Models\User;

class AdminController extends Controller
{
    public function getTickets()
    {
        try {
            $tickets = Ticket::with(['user', 'event'])->paginate(10);

            return response()->json([
                'message' => 'Tickets retrieved successfully',
                'tickets' => $tickets
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getEvents()
    {
        try {
            $events = Event::paginate(10);

            return response()->json([
                'message' => 'Events retrieved successfully',
                'events' => $events
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getNewsletters()
    {
        try {
            $newsletters = Newsletter::paginate(10);

            return response()->json([
                'message' => 'Newsletters retrieved successfully',
                'newsletters' => $newsletters
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getUsers()
    {
        try {
            $users = User::select('id','name','email','role','created_at')->paginate(10);

            return response()->json([
                'message' => 'Users retrieved successfully',
                'users' => $users
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
