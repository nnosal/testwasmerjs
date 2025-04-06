<?php
require __DIR__ . '/vendor/autoload.php';

$faker = Faker\Factory::create('fr_FR');

// Générer une liste de faux utilisateurs
$users = [];
for ($i = 0; $i < 10; $i++) {
    $users[] = [
        'nom' => $faker->lastName,
        'prenom' => $faker->firstName,
        'email' => $faker->email,
        'ville' => $faker->city,
        'bio' => $faker->text(100),
    ];
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Démo: Utilisateurs Faker</title>
    <style>
        body {
            font-family: sans-serif;
            background: #f5f5f5;
            padding: 2rem;
        }

        .card {
            background: white;
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        h4 {
            margin: 0;
            color: #333;
        }

        p {
            margin: .25rem 0;
        }

        .bio {
            font-style: italic;
            color: #666;
        }
    </style>
</head>
<body>
    <h3>Exemple d'une app qui génére 10 utilisateurs (via composer: fakerphp/faker)</h3>
    
    <?php foreach ($users as $user): ?>
        <div class="card">
            <h4><?= "{$user['prenom']} {$user['nom']}" ?></h4>
            <p><strong>Email :</strong> <?= $user['email'] ?></p>
            <p><strong>Ville :</strong> <?= $user['ville'] ?></p>
            <p class="bio"><?= $user['bio'] ?></p>
        </div>
        <hr/>
    <?php endforeach; ?>
</body>
</html>
