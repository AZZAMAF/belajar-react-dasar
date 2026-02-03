import { useRef, useState } from "react"
import GuestBookForm from "./GuestBookForm";

export default function GuestBook(){
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const nameInput = useRef(null)

    function handleSubmit(e){
        e.preventDefault();
        setName('');
        setMessage('');

        nameInput.current.focus();

        alert(`Name : ${name}, ${message}`);
    }
    return(
        <>
            <h1>GuestBook</h1>
            <form action="">
                <GuestBookForm ref={nameInput} name={name} setName={setName}/>
                <br />
                <label htmlFor="message" >message</label>
                <textarea name="message" value={message}
                onChange={(e) => setMessage(e.target.value)}/>
                <br />
                <button type="submit" onClick={handleSubmit}>submit</button>
            </form>
        </>
    )
}