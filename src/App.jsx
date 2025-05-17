import { useState } from "react";
import Header from "./Components/Header";
import './App.css'
import Languages from "./Components/Languages";
import { languages } from "./languages";
import clsx from "clsx";
import { getFarewellText, getRandomWord } from "./utils"


export default function App(){
    //State Values
    const [currentWord, setCurrentWord] = useState(getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])
    
    // Derived values
    const wrongGuessCount = 
        guessedLetters.filter(letter => !currentWord.includes(letter)).length
    const isGameWon = 
        currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length-1 
    const isGameOver = isGameWon|| isGameLost
    const lastGuessedLetter = guessedLetters[guessedLetters.length-1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

    //Static Values
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const addGuessedLetter = (letter) => {
        setGuessedLetters(prevLetters => (
            prevLetters.includes(letter) ? prevLetters: [...prevLetters, letter]
        ))
       
    }

    const languagesElements = languages.map((language,i)=>{
        const isLanguageLost = i < wrongGuessCount
        return(
            <Languages 
            key={language.name} 
            name={language.name} 
            backgroundColor={language.backgroundColor} 
            color={language.color}
            className={`languages ${isLanguageLost ? "lost" : ""}`}
            />
        )
    })

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
        return (
            <button
                className={className}
                key={letter}
                disabled={isGameOver}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })


    function renderGameStatus() {
        if (!isGameOver && isLastGuessIncorrect) {
            return <h2 className="farewell-message">
                 {getFarewellText(languages[wrongGuessCount - 1].name)}
                </h2>
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }  if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
            return null
    }

    return(
        <>
            <Header wrongGuessCount={languages.length - 1}/>
            <section className={gameStatusClass}>
                {renderGameStatus()}
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
            {isGameOver ? <button className="new-game">New Game</button>: null}
        </>
    )
}