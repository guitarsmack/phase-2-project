import React from "react";
import { Route, Switch } from "react-router-dom";
import EditBook from "./EditBook";
import EditNavbar from "./EditNavbar";


function Edit( { books, handleEdit } ){

    return (
        <div className="totalEditBox">
            <EditNavbar books={books} />
            <Switch >
                <Route exact path="/edit">
                    <div className="editBox">
                        <h1>Choose book to edit!</h1>
                    </div>
                </Route>
                <Route path="/edit/:book">
                    <EditBook handleEdit={handleEdit} />
                </Route>
            </Switch>
    </div>
    )
}

export default Edit;