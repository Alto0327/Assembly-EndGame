import { useState } from "react";
import Header from "./Components/Header";
import './App.css'
import Languages from "./Components/Languages";
import { languages } from "./languages";


export default function App(){
    const [currentWord, setCurrentWord] = useState('react')
    
    const languagesElements = languages.map(language=>(
            <Languages 
                key={language.name} 
                name={language.name} 
                backgroundColor={language.backgroundColor} 
                color={language.color}
            />
    ))

    const letterElements = currentWord.split("").map((letter,i) => (
        <span key={i}>{letter.toUpperCase()}</span>
    ))

    console.log(letterElements)
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
            <section className="word">
                {letterElements}
            </section>
        </>
    )
}