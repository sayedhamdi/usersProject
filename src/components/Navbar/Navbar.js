import React from "react";
import {Link } from "react-router-dom";
import "./Navbar.styles.css"

export default function Navbar(){

    return (
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    )
}