import React from "react";
import Book from "./Book";

function ReadBooks({books}){

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    }
    
    return (
        <div>
            <h2>Books I have read:</h2>
            <div style={containerStyle} className="booksBox">
                {books.map(book => (
                    <Book key={book.name} book={book} />
                ))}
            </div>
        </div>
    )
}

export default ReadBooks;