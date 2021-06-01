<?php

require_once './vendor/autoload.php';


  // connect to mongodb
$client = new MongoDB\Client('mongoSRV');

// foreach ($client->listDatabases() as $databaseInfo) {
//     var_dump($databaseInfo);
//   }
// $db = $client->andrewdb;
$db = $client->selectDatabase('andrewdb');

$collection = $client->andrewdb->Students;

$cursor = $collection->find(
    // [
    //     'cuisine' => 'Italian',
    //     'borough' => 'Manhattan',
    // ],
    // [
    //     'limit' => 5,
    //     'projection' => [
    //         'name' => 1,
    //         'borough' => 1,
    //         'cuisine' => 1,
    //     ],
    // ]
);

foreach ($cursor as $restaurant) {
   var_dump($restaurant);
};

// echo "Database selected";
?>
