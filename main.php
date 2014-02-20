<?php
$mycon=mysql_connect("localhost:3309","root","password");
if($mycon) {
    echo "Connect Successfully!";
}
else {
    echo "Connect failed!";
}