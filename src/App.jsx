import React from "react";
import Header from "./Components/Header";
import './App.css'

export default function App(){
    return(
        <>
            <Header/>
            <section className="game-status">
                <h2>You Win</h2>
                <p>Well Done!</p>
            </section>
        </>
    )
}