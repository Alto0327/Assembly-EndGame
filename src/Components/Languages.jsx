
export default function Languages(props){    
    const styles ={
        backgroundColor: props.backgroundColor,
        color: props.color
    }
    return (
        <div className={props.className} style={styles}>
            <p>{props.name}</p>
        </div>
    )
}