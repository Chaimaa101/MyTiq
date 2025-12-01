<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title'       => 'sometimes|string|max:255',
            'description' => 'sometimes|string|nullable',
            'date'        => 'sometimes|date|after:today',
            'place'       => 'sometimes|string|max:255',
            'price'       => 'sometimes|numeric|min:0',
            'capacity'    => 'sometimes|integer|min:1',
            'image'       => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg,webp|max:4096'
        ];
    }
}
