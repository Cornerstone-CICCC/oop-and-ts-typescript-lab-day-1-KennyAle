"use strict";
// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["Fantasy"] = 0] = "Fantasy";
    BookGenre[BookGenre["History"] = 1] = "History";
    BookGenre[BookGenre["Drama"] = 2] = "Drama";
    BookGenre[BookGenre["Science"] = 3] = "Science";
    BookGenre[BookGenre["Teen"] = 4] = "Teen";
})(BookGenre || (BookGenre = {}));
var library = [];
function addBook(bookId, title, author, genre, isAvailable) {
    if (isAvailable === void 0) { isAvailable = true; }
    var newBook = {
        bookId: bookId,
        title: title,
        author: author,
        genre: genre,
        isAvailable: isAvailable
    };
    library.push(newBook);
    return newBook;
}
function borrowBook(bookId) {
    var bookFound = library.find(function (book) { return book.bookId == bookId; });
    if (!bookFound)
        return "Book not found";
    bookFound.isAvailable = false;
    return "".concat(bookFound.title, " has been borrowed");
}
function returnBook(bookId) {
    var bookFound = library.find(function (book) { return book.bookId == bookId; });
    if (!bookFound)
        return "Book not found";
    bookFound.isAvailable = true;
    return "".concat(bookFound.title, " has been returned");
}
function checkAvailability(bookId) {
    var bookFound = library.find(function (book) { return book.bookId == bookId; });
    if (!bookFound)
        return false;
    return bookFound.isAvailable;
}
function removeBook(bookId) {
    var bookFound = library.find(function (book) { return book.bookId == bookId; });
    if (!bookFound)
        return "Book not found";
    library = library.filter(function (book) { return book.bookId !== bookId; });
    return "".concat(bookFound.title, " has been removed from the library");
}
// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"
