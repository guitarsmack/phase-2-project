import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    return (
        <div className="navBar">
            <NavLink to="/" className="navStyles">
                Home
            </NavLink>
            <NavLink to="/edit" className="navStyles">
                Edit
            </NavLink>
            <NavLink to="/add" className="navStyles">
                Add
            </NavLink>
        </div>
    )
}

export default NavBar;