import React from "react";
import Header from "./Components/Header";
import './App.css'
import Languages from "./Components/Languages";
import { languages } from "./languages";


export default function App(){
    const languagesElements = languages.map((language)=>{
        return <Languages key={language.name} name={language.name} backgroundColor={language.backgroundColor} color={language.color}/>
    })
    return(
        <>
            <Header/>
            <section className="game-status">
                <h2>You Win</h2>
                <p>Well Done! 🎉</p>
            </section>
            <section className="languages-container">
                {languagesElements}
            </section>
        </>
    )
}