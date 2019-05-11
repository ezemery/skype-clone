import React from "react";
import "./Header.css"

export default function Header({user}){
    const {name, status} = user;
    return(
        <header className="Header">
            <h1 className="header_name">{name}</h1>
            <p className="header_status">{status}</p>
        </header>
    )
}