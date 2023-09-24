import React from "react";
import { Route, Switch } from "react-router-dom";
import EditBook from "./EditBook";
import EditNavbar from "./EditNavbar";


function Edit( { books } ){

    

    return (
        <div className="totalEditBox">
            <EditNavbar books={books} />
            <Switch >
                <Route exact path="/edit">
                    <div className="emptyBox">
                        <h1>Choose book to edit!</h1>
                    </div>
                </Route>
                <Route path="/edit/:book">
                    <EditBook books={books} />
                </Route>
            </Switch>
    </div>
    )
}

export default Edit;