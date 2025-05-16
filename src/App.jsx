import { useState } from "react";
import Header from "./Components/Header";
import './App.css'
import Languages from "./Components/Languages";
import { languages } from "./languages";
import clsx from "clsx";


export default function App(){
    const [currentWord, setCurrentWord] = useState('react')
    const [guessedLetters, setGuessedLetters] = useState([])
    
    const wrongGuessCount = 
        guessedLetters.filter(letter => !currentWord.includes(letter)).length
    console.log(wrongGuessCount)


    const addGuessedLetter = (letter) => {
        setGuessedLetters(prevLetters => (
            prevLetters.includes(letter) ? prevLetters: [...prevLetters, letter]
        ))
       
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const languagesElements = languages.map(language=>(
            <Languages 
                key={language.name} 
                name={language.name} 
                backgroundColor={language.backgroundColor} 
                color={language.color}
            />
    ))

    const letterElements = currentWord.split("").map((letter,i) => {
        const display = guessedLetters.includes(letter) && currentWord.includes(letter)
        const className = clsx(
         "defaultWord",
        {
            guessed: display
        })
        return(
           <span 
                key={i}
                className={className}
            >
                {letter.toUpperCase()}
            </span>
        )
    })

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        console.log(className)
        return (
            <button
                className={className}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
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
            <section className="word">
                {letterElements}
            </section>
            <section className="wrongGuess">
                <p>Number of Languages Lost: {wrongGuessCount}</p>
            </section>
            <section className="keyboard-container">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </>
    )
}