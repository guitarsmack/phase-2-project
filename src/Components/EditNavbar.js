import React from "react";
import { Link } from "react-router-dom";

function EditNavbar( { books } ){

    const styleBooks = {
        display: "inline-block",
        padding: "3px",
        margin: "10px",
        color: "black",
        backgroundColor: "beige",
        borderRadius: "5px",
        borderColor: "black",
        borderWidth: "1px",
        borderStyle: "solid"
    }

    return (
        <nav className="bookSelect">
            {books.map(book => {
                return ( 
                <Link style={styleBooks}
                    key={book.name}
                    to={`/edit/${book.name}`} >
                        {book.name}
                </Link>
                )
            })}
        </nav>
    )
}



export default EditNavbar;