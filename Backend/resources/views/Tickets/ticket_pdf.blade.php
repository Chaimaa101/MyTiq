<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ticket</title>
</head>
<body>
    @php
    function formatDateFr($dateString) {
        return \Carbon\Carbon::parse($dateString)->locale('fr')->translatedFormat('l d F Y – H:i');
    }

    function generateTicketNumber($id) {
        return 'TK-' . str_pad($id, 6, '0', STR_PAD_LEFT) . '-' . strtoupper(base_convert(time(), 10, 36));
    }
@endphp

<div class="w-[210mm] h-[297mm] bg-white p-8 mx-auto font-sans text-gray-800">

    {{-- Header avec bordure décorative --}}
    <div class="border-b-4 border-red-500 pb-4 mb-6">
        <div class="flex justify-between items-center">
            <h1 class="text-3xl font-bold text-gray-900">BILLET ÉVÉNEMENT</h1>
            <div class="text-4xl">🎫</div>
        </div>
        <p class="text-gray-600 text-sm mt-2">Billet numérique • Non transférable</p>
    </div>

    {{-- Section Événement --}}
    <div class="mb-8">
        <div class="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl mb-4">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ $event->title }}</h2>
            <p class="text-gray-700">{{ $event->description }}</p>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                    <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span class="text-red-600">📅</span>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-700">Date & Heure</p>
                        <p class="text-gray-900">{{ formatDateFr($event->date) }}</p>
                    </div>
                </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span class="text-blue-600">📍</span>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-700">Lieu</p>
                        <p class="text-gray-900">{{ $event->location }}</p>
                    </div>
                </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span class="text-green-600">💰</span>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-700">Prix</p>
                        <p class="text-gray-900">{{ $event->price }} €</p>
                    </div>
                </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                    <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <span class="text-purple-600">🎭</span>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-700">Type</p>
                        <p class="text-gray-900">{{ $event->type ?? 'Événement' }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Divider --}}
    <div class="relative my-8">
        <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-dashed border-gray-300"></div>
        </div>
        <div class="relative flex justify-center">
            <span class="px-4 bg-white text-gray-500 text-sm">DÉTAILS DU DÉTENTEUR</span>
        </div>
    </div>

    {{-- Section Utilisateur --}}
    <div class="mb-8">
        <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Informations du détenteur</h3>

            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-3">
                    <div>
                        <p class="text-sm text-gray-600">Nom complet</p>
                        <p class="font-semibold text-lg">{{ $user->name }}</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600">Email</p>
                        <p class="font-semibold">{{ $user->email }}</p>
                    </div>
                </div>

                <div class="space-y-3">
                    <div>
                        <p class="text-sm text-gray-600">Numéro de billet</p>
                        <p class="font-mono font-bold text-red-600">{{ generateTicketNumber($ticket->id) }}</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600">Date d'achat</p>
                        <p class="font-semibold">{{ formatDateFr($ticket->created_at) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- QR Code et barcode --}}
    <div class="mb-8">
        <div class="bg-gray-900 text-white p-6 rounded-xl">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="text-lg font-bold mb-2">Code d'accès</h4>
                    <p class="text-gray-300 text-sm mb-4">Présentez ce code à l'entrée</p>
                    <div class="bg-white text-gray-900 p-3 rounded-lg font-mono text-center">
                        {{ strtoupper(base_convert($ticket->id, 10, 36)) }}
                    </div>
                </div>

                <div class="text-center">
                    <div class="bg-white p-4 rounded-lg inline-block mb-2">
                        <div class="w-32 h-32 bg-gradient-to-br from-red-400 to-pink-500 rounded flex items-center justify-center">
                            <span class="text-white font-bold">QR CODE</span>
                        </div>
                    </div>
                    <p class="text-xs text-gray-400">Scannez pour vérifier</p>
                </div>
            </div>

            {{-- Code-barres --}}
            <div class="mt-6 pt-4 border-t border-gray-700">
                <div class="text-center text-gray-400 text-xs mt-2">
                    {{ generateTicketNumber($ticket->id) }}
                </div>
            </div>
        </div>
    </div>

    {{-- Footer --}}
    <div class="mt-8 pt-6 border-t border-gray-200">
        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <h5 class="text-sm font-bold text-gray-900">Conditions d'utilisation</h5>
            <p class="text-xs text-gray-700 mt-1">
                • Ce billet est nominatif et non transférable<br>
                • Une pièce d'identité peut être demandée à l'entrée<br>
                • Les billets ne sont ni remboursables ni échangeables<br>
                • L'organisateur se réserve le droit de modifier la programmation
            </p>
        </div>

        <div class="flex justify-between items-center text-sm text-gray-600">
            <div>
                <p>Généré le {{ now()->locale('fr')->translatedFormat('d F Y') }}</p>
                <p>Powered by EventTicket System</p>
            </div>
            <div class="text-right">
                <p>Service client: contact@eventticket.com</p>
                <p>Tél: +33 1 23 45 67 89</p>
            </div>
        </div>
    </div>

    {{-- Filigrane --}}
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-9xl font-black text-gray-900 transform rotate-45">VALID</div>
        </div>
    </div>

</div>

</body>
</html>