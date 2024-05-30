<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST["title"];
    $author = $_POST["author"];
    $year = $_POST["year"];
    $genre = $_POST["genre"];
    $description = $_POST["description"];

    $xmlFile = "xml/books.xml";

    if (file_exists($xmlFile)) {
        $xml = simplexml_load_file($xmlFile);
    } else {
        $xml = new SimpleXMLElement("<library></library>");
    }

    $book = $xml -> addChild("book");
    $book -> addChild("title", $title);
    $book->addChild('author', $author);
    $book->addChild('year', $year);
    $book->addChild('genre', $genre);
    $book->addChild('description', $description);

    $xml -> asXML($xmlFile);

    header("Location: xml/books.xml");
}
?>