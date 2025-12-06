<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Ticket</title>
    {{-- Tailwind CDN (for testing). In Laravel you should compile it with Vite --}}
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 flex justify-center items-center min-h-screen p-6">

    <div class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

        <!-- Header -->
        <div class="text-center border-b pb-6">
            <h1 class="text-3xl font-bold text-gray-800">
                {{ $event->title ?? 'Événement' }}
            </h1>
            <p class="text-gray-500 mt-2">
                {{ $event->date ?? '' }} — {{ $event->place ?? '' }}
            </p>
        </div>

        <!-- Info Section -->
        <div class="mt-6 space-y-4">

            <div class="flex justify-between">
                <span class="text-gray-700 font-semibold">Nom :</span>
                <span class="text-gray-900">{{ $user->name }}</span>
            </div>

            <div class="flex justify-between">
                <span class="text-gray-700 font-semibold">Ticket code :</span>
                <span class="text-gray-900">{{ $ticket->code ?? '—' }}</span>
            </div>

            <div class="flex justify-between">
                <span class="text-gray-700 font-semibold">Date d'achat :</span>
                <span class="text-gray-900">
                    {{ $ticket->date ?? now()->toDateTimeString() }}
                </span>
            </div>

        </div>

        <!-- Footer -->
        <div class="mt-8 text-center text-sm text-gray-400 border-t pt-4">
            Merci pour votre achat !
        </div>

    </div>

</body>
</html>
