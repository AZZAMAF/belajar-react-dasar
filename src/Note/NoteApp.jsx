import { useImmer, useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";
import { NotesContext, NotesDispacthContext } from "./NoteContext";

let id = 0;

const initialNotes = [
    { id: id++, text: "Learn Html", done: false },
    { id: id++, text: "Learn Css", done: true },
    { id: id++, text: "Learn JavaScript", done: false },
    { id: id++, text: "Learn React Js", done: false },
];

function notesReducer(notes, action) {
    if (action.type === "ADD_NOTE") {
        notes.push({
            id: id++,
            text: action.text,
            done: false,
        });
    } else if (action.type === "CHANGE_NOTE") {
        const index = notes.findIndex((note) => note.id === action.id);
        notes[index] = { ...action };
    } else if (action.type === "DELETE_NOTE") {
        const index = notes.findIndex((note) => note.id === action.id);
        notes.splice(index, 1);
    }
}

export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

    return (
        <div>
            <NotesContext.Provider value={notes}>
                <NotesDispacthContext.Provider value={dispatch}>
                    <h1>Note App</h1>
                    <NoteForm/>
                    <NoteList />
                </NotesDispacthContext.Provider>
            </NotesContext.Provider>
        </div>
    );
}
