import { useState } from "react";
import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Task(){

    const [items, setItems] = useImmer([])

    function handleonSubmit(item){
        setItems((draft)=> {
            draft.push(item);
        })
    }
    return(
        <div>
            <TaskForm onSubmit={handleonSubmit}/>
            <TaskList items={items}/>
        </div>
    )
}