import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Book from "./Book";


function EditBook({ books, handleEdit }) {
    const [comment, setComment] = useState("");
    const [isRead, setIsRead] = useState(false);
    const params = useParams();

  
    const currentBook = books.find((book) => book?.name === params.book);
  
    function handleChange(e) {
      setComment(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      if (!currentBook) {
        console.error("Current book is undefined");
        return;
      }
      

      fetch(`https://read-vs-unread-books.onrender.com/books/${currentBook?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comments: comment,
          read: true,
        }),
      })
        .then((resp) => resp.json())
        .then(() => {
          e.target.reset();
          alert("Check home for your updated books!")
          handleEdit({
            ...currentBook,
            comments: comment,
            read: true
          });
        })
        .catch((error) => {
          console.error("Error in fetch request:", error);
        });
    }
  
    if (!currentBook) {
      return <div>Loading...</div>
    }
    
  
    return (
      <div className="editBox">
        <form onSubmit={handleSubmit} className="editForm">
          <div className="bookForm">
            <Book book={currentBook} />
          </div>
          {!currentBook.read ? (
            <label className="checkBox">
              Have you read it? Click to add comments!
              <button type="button" onClick={() => setIsRead(!isRead)}>
                Click to add!
              </button>
              {isRead ? (
                <>
                <textarea
                  onChange={handleChange}
                  className="commText"
                  type="text"
                  value={comment}
                  name="comments"
                />
                <input type="submit" value="Submit Book" />
                </>
              ) : null}
            </label>
          ) : null}
        </form>
      </div>
    );
  }
  

export default EditBook;