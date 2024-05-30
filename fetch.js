function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function processData() {
    fetch("xml/books.xml")
        .then(res => res.text())
        .then(data => {
            let featuredBooks = document.querySelector(".featured-books");
            featuredBooks.innerHTML = "";
            // Parse the XML string into a DOM object
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const books = xmlDoc.getElementsByTagName("book");
            let randomIndex = getRandomInt(books.length);
            
            const title = books[randomIndex].getElementsByTagName("title")[0].textContent;
            const author = books[randomIndex].getElementsByTagName("author")[0].textContent;
            const year = books[randomIndex].getElementsByTagName("year")[0].textContent;
            const genre = books[randomIndex].getElementsByTagName("genre")[0].textContent;
            const description = books[randomIndex].getElementsByTagName("description")[0].textContent;

            let bookInfo = document.createElement("p");
            bookInfo.innerHTML = "<strong>Title:</strong> " + title + "<br>" +
                                 "<strong>Author:</strong> " + author + "<br>" +
                                 "<strong>Year:</strong> " + year + "<br>" +
                                 "<strong>Genre:</strong> " + genre + "<br>" +
                                 "<strong>Description:</strong> " + description + "<br>";
            featuredBooks.appendChild(bookInfo);                    
            }
        )
        
}


