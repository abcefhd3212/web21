<!DOCTYPE html>
<html>
    <body>
        <title>The Submitted Form:</title>
        <br/>
<?php

$brandErr = $priceErr = "";
$brand = $price = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["b"])) {
    $brandErr = "Brand is required";
  } else {
    $brand = test_input($_POST["brand"]);
    
    if (!preg_match("/^[a-zA-Z-' ]*$/",$brand)) {
      $brandErr = "Only letters and white space allowed";
    }
  }
  
  if (empty($_POST["price"])) {
    $priceErr = "Price is required";
  } else {
    $price = test_input($_POST["price"]);
    if (!preg_match("/\b[0-9]"){
      $priceErr = "Invalid Price ";
    }
  }
    

  
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>



<?php
echo "<h2>Your Product:</h2>";
echo $brand;
echo "<br>";
echo $price;
echo "<br>";
?>

</body>
</html>