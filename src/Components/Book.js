import React from "react";

function Book({ book }){

    if (!book) {
        return null;
      }
    
    const { name, author, year, pages, read, comments } = book

    return (
        <div className="card">
            <p><strong>Title:</strong> {name}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Pages:</strong> {pages}</p>
            <p><strong>Year Published:</strong> {year}</p>
            {read ? <><h3>Comments: </h3><p>{comments}</p></> : null }
        </div>
        )
}

export default Book;