import React from "react";
import faceImg from "./images/face.png" 

export default function Header() {
    return (
        <header className="header">
            <img src={faceImg} className="header-img"/>
            <h1 className="header-title">Meme Generator</h1>
            <h4>React Course - Project 3</h4>
        </header>
    )
}
