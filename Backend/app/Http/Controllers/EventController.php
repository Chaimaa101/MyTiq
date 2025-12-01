<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::with('tickets')->orderBy('date', 'asc')->get();
        return $events;
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $cloudinary = Cloudinary::upload($request->file('image')->getRealPath());
            $validated['image'] = $cloudinary->getSecurePath(); 
        }

        $event = Event::create($validated);

        return response()->json([
            'message' => 'Événement créé avec succès.',
            'data'    => $event
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        try {
            return $event;
        } catch (\Exception $e) {
            return [
                'error' => $e->getMessage()
            ];
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        $validated = $request->validated();

        if ($request->hasFile('image')) {

            $cloudinary = Cloudinary::upload($request->file('image')->getRealPath());
            $validated['image'] = $cloudinary->getSecurePath();
        }

        $event->update($validated);

        return response()->json([
            'message' => 'Événement mis à jour.',
            'data'    => $event
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json([
            'message' => 'Événement supprimé.'
        ], 200);
    }
}
