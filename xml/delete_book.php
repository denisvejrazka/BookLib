<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $titleToDelete = $_POST['title'];

    $xml = new DOMDocument();
    $xml->load('books.xml');

    $xpath = new DOMXPath($xml);
    foreach ($xpath->query("//book[title='$titleToDelete']") as $book) {
        $book->parentNode->removeChild($book);
    }

    $xml->save('books.xml');

    header("Location: ../index.html");
}
?>
