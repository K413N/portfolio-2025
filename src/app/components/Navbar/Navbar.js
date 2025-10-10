import React from 'react'
import styles from "../../page.module.css";

function Navbar() {
    return (
        <div className="navbar">
            <button className="navbutton">Home</button>
            <button className="navbutton">About me</button>
            <button className="navbutton">Contact me</button>
        </div>
    )
}

export default Navbar;