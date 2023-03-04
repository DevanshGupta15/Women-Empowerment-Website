<?php 
header("Location: ./comingsoon.html"); 
 // database connection code //

//$con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '', 'website'); 
  // get the post records 

$txtEmail = $_POST['email'];
// $txtName = $_POST['name']; 
// $txtSurname = $_POST['surname']; 
// $txtAddress = $_POST['address']; 
// $txtMessage = $_POST['paragraph']; 
// $txtCompany = $_POST['company'];

// database insert SQL code 
$sql = "INSERT INTO `newletterdb` (`Email`) VALUES ('$txtEmail')";

$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Contact Records Inserted";
}
?>