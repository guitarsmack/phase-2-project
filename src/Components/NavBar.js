import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    const navStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "6px 6px 6px",
        background: "tan",
        borderRadius: "15px",
        color: "black",
        borderColor: "black",
        borderWidth: "1px",
        borderStyle: "solid"
      };

    return (
        <nav className="navBar">
            <NavLink style={navStyles} exact to="/" >
                Home
            </NavLink>
            <NavLink style={navStyles} to="/edit" >
                Edit
            </NavLink>
            <NavLink style={navStyles} to="/add" >
                Add
            </NavLink>
        </nav>
    )
}

export default NavBar;