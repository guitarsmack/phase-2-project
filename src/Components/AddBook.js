import React, {useState} from "react";

function AddBook( { updateBooks } ){

    const formStyle = {
        width: "500px",
        borderColor: "black",
        borderWidth: "1px",
        borderStyle: "solid"
    }

    const [formData,setFormData] = useState({
        name: "",
        author: "",
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
        fetch("https://read-vs-unread-books.onrender.com/books",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then((data) => {
            updateBooks(data)
            setFormData({
                name: "",
                author: "",
                year: "",
                pages: "",
                read: false,
                comments: ""
            })
        })
            alert("Check home for an updated list of your books!")
    }

    return (
        <div className="formBlock">
            <form style={formStyle} onSubmit={handleSubmit} >
                <div className="formField">
                    <label>
                        Book Title:
                        <input type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}  />
                    </label>
                </div>
                <div className="formField">
                    <label>
                        Author:
                        <input type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}  />
                    </label>
                </div>
                <div className="formField">
                    <label>
                        Year Published:
                        <input type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}  />
                    </label>
                </div>
                <div className="formField">
                    <label>
                        Pages:
                        <input type="text"
                        name="pages"
                        value={formData.pages}
                        onChange={handleChange}  />
                    </label>
                </div>
                <input type="submit" value="Submit Book!" />
            </form>
        </div>

    )
}

export default AddBook;