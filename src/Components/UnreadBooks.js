import React from "react";
import Book from "./Book";

function UnreadBooks({books}){
    return (
        <div className="bookContainer">
        <h2>Books I look forward to reading:</h2>
            <div className="booksBox">
                {books.map(book => (
                    <Book key={book.name} book={book} />
                ))}
            </div>
        </div>
    )
}

export default UnreadBooks;