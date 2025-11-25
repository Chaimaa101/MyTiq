<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(4),
            'description' => fake()->paragraph(),
            'date' => fake()->date(),
            'place' => fake()->city(),
            'price' => fake()->randomFloat(2, 10, 300),
            'capacity' => fake()->numberBetween(50, 500),
            'image' => fake()->imageUrl(),
        ];
    }
}
