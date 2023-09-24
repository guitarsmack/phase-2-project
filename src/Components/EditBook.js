import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Book from "./Book";

function EditBook( { books } ){

    const params = useParams()

    
    let currentBook = books.find((book) => book.name === params.book)

    console.log(currentBook)

    // const [checked,setChecked] = useState(false)

    function handleCheck(e){
        console.log(e.target.value)
    }

    return (
        <div className="editBox">
            <form className="editForm">
                <div className="bookForm">
                    {/* <Book book={currentBook} /> */}
                </div>
                <label className="checkBox">
                    Have you read it? Check to add comments!
                    <input onChange={handleCheck} type="checkbox" />
                </label>
            </form>
        </div>
    )
}

export default EditBook;