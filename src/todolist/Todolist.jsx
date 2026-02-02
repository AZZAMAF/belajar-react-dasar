import Todo from "./Todo";

export default function Todolist(){
    const data = [
        {
            id: 0,
            text : "Learn HTML",
            isCompleted : true,
        },
        {
            id: 1,
            text: "Learn Css",
            isCompleted: true,
        },
        {
            id: 2,
            text: "Learn JavaScript",
            isCompleted: true,
        },
        {
            id: 3,
            text: "Learn Reac Jsa",
            isCompleted: false,
        }

    ]

    


    return(
        <ul>
            {data.map((todo)=>(
                <Todo key={todo.id} {...todo}/>
            ))}
            
        </ul>
    )
}