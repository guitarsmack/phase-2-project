import React, {useState} from "react";

function AddBook( { updateBooks } ){

    const [formData,setFormData] = useState({
        name: "",
        author: 9,
        year: "",
        pages: "",
        read: false,
        comments: ""
    })

    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        const bookData = {
            ...formData,
            [key]:value
        }
        setFormData(bookData)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/books",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then(resp => resp.json())
        .then(() => updateBooks(formData))
    }

    return (
        <div className="formBlock">
            <form onChange={handleChange} onSubmit={handleSubmit} >
                <div className="formField">
                    <label>
                        Book Title:
                        <input type="text" name="name" />
                    </label>
                </div>
                <div className="formField">
                    <label>
                        Author:
                        <input type="text" name="author" />
                    </label>
                </div>
                <div className="formField">
                    <label>
                        Year Published:
                        <input type="text" name="year" />
                    </label>
                </div>
                <div className="formField">
                    <label>
                        Pages:
                        <input type="text" name="pages" />
                    </label>
                </div>
                <input type="submit" value="Submit Book!" />
            </form>
        </div>

    )
}

export default AddBook;