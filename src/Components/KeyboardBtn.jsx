export default function Keyboard(props){
    return(
        <button className="keyboard-btn--default">{props.letter.toUpperCase()}</button>
    )
}