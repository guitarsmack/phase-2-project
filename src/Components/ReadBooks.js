import React from "react";
import Book from "./Book";

function ReadBooks({books}){
    return (
        <div className="bookContainer">
            <h2>Books I have read:</h2>
            <div className="booksBox">
                {books.map(book => (
                    <Book key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}

export default ReadBooks;