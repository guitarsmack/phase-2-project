import React from "react";
import Book from "./Book";

function UnreadBooks({books}){

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    }

    return (
        <div className="bookContainer">
        <h2>Books I look forward to reading:</h2>
            <div style={containerStyle} className="booksBox">
                {books.map(book => (
                    <Book key={book.name} book={book} />
                ))}
            </div>
        </div>
    )
}

export default UnreadBooks;