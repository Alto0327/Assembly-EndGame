
export default function Languages(props){    
    const styles ={
        backgroundColor: props.backgroundColor,
        color: props.color
    }
    return (
        <div className='languages' style={styles}>
            <p>{props.name}</p>
        </div>
    )
}