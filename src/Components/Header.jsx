export default function Header({wrongGuessCount}){
    return(
        <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word in under {wrongGuessCount} attempts to keep the programming world safe from Assembly</p>
        </header>
    )
}