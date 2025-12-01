<!DOCTYPE html>
<html>
<head>
    <title>Newsletter Confirmation</title>
</head>
<body>
    <h1>Bonjour {{ $user->name ?? 'Cher utilisateur' }},</h1>
    <p>Merci de vous être inscrit à notre newsletter ! Vous recevrez bientôt nos actualités.</p>
</body>
</html>