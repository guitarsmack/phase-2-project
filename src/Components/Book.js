import React from "react";
import Comments from "./Comments";

function Book({ book }){
    
    const { name, author, year, pages, read, comments } = book

    return (
        <div className="card">
            <p><strong>Title:</strong> {name}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Pages:</strong> {pages}</p>
            <p><strong>Year Published:</strong> {year}</p>
            {read ? <Comments comment={comments} /> : null }
        </div>
        )
}

export default Book;