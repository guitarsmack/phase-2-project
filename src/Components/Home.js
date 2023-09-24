import React from "react";
import ReadBooks from "./ReadBooks";
import UnreadBooks from "./UnreadBooks";

function Home({books}){

    const readBooks = books.filter(book => book.read === true)
    const unreadBooks = books.filter(book => book.read === false)

    return (
        <div>
            <ReadBooks books={readBooks} />
            <UnreadBooks books={unreadBooks} />
        </div>
    )
}

export default Home;