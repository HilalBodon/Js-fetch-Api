<?php 
session_start(); 
    include("connection.php");

    $query = $nabiha->prepare("SELECT * FROM users");
    $query->execute();

    $array = $query->get_result();
    $response = [];
    while($article = $array->fetch_assoc()){
        $response[] = $article;
    }

   $jamileh = json_encode($response);
   echo $jamileh;
