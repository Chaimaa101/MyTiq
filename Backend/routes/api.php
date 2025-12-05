<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;

use App\Http\Controllers\TicketController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/abonner', [NewsletterController::class, 'abonner']);
Route::post('/desabonner', [NewsletterController::class, 'desabonner']);

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::get('/events', [EventController::class, 'index']);
Route::get('/events/{id}', [EventController::class, 'show']);



Route::post('logout', [AuthController::class, 'logout']);
Route::apiResource('event.tickets',TicketController::class);
Route::get('/myTickets', [TicketController::class, 'myTickets']);

// Route::middleware(['auth:sanctum'])->group(function () {
// });




Route::post('/events', [EventController::class, 'store']);
Route::put('/events/{event}', [EventController::class, 'update']);
Route::delete('/events/{event}', [EventController::class, 'destroy']);

Route::get('/tickets', [TicketController::class, 'index']);
Route::post('/newsletters', [NewsletterController::class, 'index']);

// Route::apiResource('users', UserController::class);

// Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
// });