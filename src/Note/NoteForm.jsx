import { useContext, useState } from "react";
import { NotesDispacthContext } from "./NoteContext";

export default function NoteForm(){
    const [text, setText] = useState('');
    const dispatch = useContext(NotesDispacthContext)
    
    function handleChange(e){
        setText(e.target.value);
    }

    function handleClick(){
        setText('');
        dispatch({
            type: 'ADD_NOTE',
            text: text
        })
    }

    return(
        <>
            <input placeholder="Add Note" value={text} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </>
    )
}