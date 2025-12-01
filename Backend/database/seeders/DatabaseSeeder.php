<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Event;
use App\Models\Newsletter;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
    
    $users = User::factory(10)->create();

    $events = Event::factory(4)->create();
    Newsletter::factory(10)->create();


    foreach ($events as $event) {
        Ticket::factory(10)->create([
            'event_id' => $event->id,
            'user_id' => $users->random()->id,
        ]);
    }
}
}
