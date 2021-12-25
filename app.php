<?php


//read and decode json file
$data;
function readData() {
global $data;
$res = file_get_contents('t.json');
$data = json_decode($res, true);
$data = array_filter($data);
return $data;
}

//write and encode json file
function writeData() {
global $data;
$jsonData = json_encode($data, JSON_UNESCAPED_UNICODE);
file_put_contents('t.json',$jsonData);
}


//manipulate with array in accordance with pressed button
if (trim($_POST['one']) !='') {
    global $data;
    $string = trim($_POST['one']);
    readData();
    array_push($data, $string);
    writeData();
} elseif (array_key_exists('del', $_POST)) {
    global $data;
    readData();
   $data = array_splice($data,0 ,-1);
   writeData();
}
else {
    exit;
}


?>