import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    const navStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "6px 6px 6px",
        background: "tan",
        color: "white",
        borderRadius: "15px",
        color: "black",
        borderColor: "black",
        borderWidth: "1px",
        borderStyle: "solid"
      };

    return (
        <div className="navBar">
            <NavLink style={navStyles} to="/" className="navStyles">
                Home
            </NavLink>
            <NavLink style={navStyles} to="/edit" className="navStyles">
                Edit
            </NavLink>
            <NavLink style={navStyles} to="/add" className="navStyles">
                Add
            </NavLink>
        </div>
    )
}

export default NavBar;