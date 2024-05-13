<?php

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true); //Prend le contenu de la requête

$contacts = json_decode(file_get_contents('../storage/contacts.json'), true); //Charge le contenu de contact.json pour pouvoir utiliser en php.

$contacts[] = $data; //Ajoute $data dans contacts

file_put_contents('../storage/contacts.json', json_encode($contacts)); //Remet le tout dans le fichier JSON

if($_SERVER["REQUEST_METHOD"] == "POST"){
    
    $errors = [];
    $nom = htmlspecialchars($data["name"]);
    $email = htmlspecialchars($data["email"]);
    $message = htmlspecialchars($data["message"]);

    if(empty($nom) || strlen($nom) < 2 || strlen($nom) > 255){
        $errors["name"] = "Nom invalide";
    }

    if(!empty(!filter_var($email, FILTER_VALIDATE_EMAIL))){
        $errors["email"] = "Email invalide";
    }

    if(empty($message) || strlen($message) < 10 || strlen($message) > 3000){
        $errors["message"] = "Message invalide";
    }

    if (!empty($errors)) {
        echo json_encode(array('errors' => $errors));
    }
    else{
        echo json_encode(['success' => true]); //Préviens le front que ça a marché
    }


}


?>