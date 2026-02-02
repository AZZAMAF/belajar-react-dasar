import { useImmer, useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";

let id = 0 ;

const initialNotes = [ 
    {id:id++, text:"Learn Html", done:false},
    {id:id++, text:"Learn Css", done:true},
    {id:id++, text:"Learn JavaScript", done:false},
    {id:id++, text:"Learn React Js", done:false},
]

function notesReducer(notes, action){

    if(action.type === 'ADD_NOTE'){
        notes.push({
            id:id++,
            text: action.text,
            done: false
        })
    } else if (action.type === 'CHANGE_NOTE'){
        
    }



    switch (action.type){
        case "ADD_NOTE":
            return [
                ...notes,
                {
                    
                }
            ];
        case "CHANGE_NOTE":
            return notes.map(note =>
                note.id === action.id ? {...note, text: action.text, done: action.done } : note
            )
        case "DELETE_NOTE":
            return notes.filter(note => note.id !== action.id)
        default:
            return notes

    }

}

export default function NoteApp(){
    const [notes, dispatch] = useImmerReducer(notesReducer,initialNotes)

    function handleAddNote(text){
        dispatch({
            type: 'ADD_NOTE',
            text: text
        })
    }

    function handleChangeNote(note){
        dispatch({
            ...note,
            type: 'CHANGE_NOTE',
            
        })
    }

    function handleDeleteNote(note){
        dispatch({
            type: 'DELETE_NOTE',
            id: note.id 
        })
    }

    return(
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote}/>
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}/>
        </div>
    )
}