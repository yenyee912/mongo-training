<?php

require_once './vendor/autoload.php';

$client = new MongoDB\Client('mongodb+srv://andrew:MDB123@cluster0.m4ieo.mongodb.net/testdb?retryWrites=true&w=majority');
// mongodb+srv://mmdr:MDB123@cyy-9iko9.mongodb.net/testdb
// mongodb+srv://sa:MDB123@andrew.spzdw.mongodb.net/training-db
$db = $client->selectDatabase('testdb');
$collection = $client->testdb->car;

$cursor = $collection->find(

);

foreach ($cursor as $car) {
   var_dump($car);
};

?>
