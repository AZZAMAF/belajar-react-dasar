import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./container";
import Todolist from "../todolist/todolist";
import Table from "../Table/Table";
import Alert from "../Button/Alert";
import Mybutton from "../Button/Mybutton";
import Toolbar from "../Button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";
import Counter from "../form/Counter";


createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <Todolist/>
                <Alert text='click me' message='You Click Me'/>
                <Mybutton text='Smash me' onSmash={()=> alert ("You Smash Me!!")}/>
                <Toolbar onClick={(e) => {
                    e.stopPropagation();
                    alert(' YOu Click Toolbar')
                }}/>
                <Table/>
                <SearchForm/>
                <SayHelloForm/>
                <Counter/>
            </Container>
        </StrictMode>
    
    )