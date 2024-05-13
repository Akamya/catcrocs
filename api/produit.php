<?php

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//on récupère l'id de l'url dans la super globale GET
$id= intval($_GET['id']);

//on verifie que l'id ne soit pas vide ou nul
if(!$id) {
    throw new InvalidArgumentException("L'id n'est pas valide");
}

//on recupepre la liste des postes
$produits = file_get_contents('../storage/produits.json');

//transforme le texte json en tableau php
$produits = json_decode($produits);
// var_dump($posts);

foreach ($produits as $produit){
    if ($produit->id == $id) {
        echo json_encode($produit);
        die();
    }
}
?>