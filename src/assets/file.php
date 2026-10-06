<?php
header('Content-Type: application/json; charset=UTF-8');

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (strpos($contentType, 'application/json') !== false) {

    $input = json_decode(file_get_contents('php://input'), true);
} else {

    $input = array_merge($_POST, $_FILES);
}

if ($input === null) {
    $input = [];
}

echo json_encode([
    'status' => 'success',
    'data'   => $input,
]);