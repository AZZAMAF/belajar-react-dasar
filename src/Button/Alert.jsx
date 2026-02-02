export default function Alert({text, message}){
    function handleClick(e){
        console.info(e.target)
        alert(message)
    }

    return(
        <button onClick={handleClick}>{text}</button>
    )

}
