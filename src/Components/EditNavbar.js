import React from "react";
import { NavLink } from "react-router-dom";

function EditNavbar( { books } ){

    const styleBooks = {
        padding: "15px",
        color: "black",
        backgroundColor: "beige"
    }

    return (
        <div className="bookSelect">
            {books.map(book => {
                return ( 
                <NavLink style={styleBooks}
                    key={book.name}
                    to={`/edit/${book.name}`}
                    className="navStyles">
                        {book.name}
                </NavLink>
                )
            })}
        </div>
    )
}



export default EditNavbar;