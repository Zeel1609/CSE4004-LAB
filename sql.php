<?php

$servername="localhost";

$username="id10199674_anshkunwar";

$password="anshkunwar";

$conn=new mysqli($servername,$username,$password);



if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);

} 

echo "connected";



?>