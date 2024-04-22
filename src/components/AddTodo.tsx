import '../assets/AddTodo.css'
import {ChangeEvent, useState} from "react";

export function AddTodo() {

    const [todoInput, setTodoInput] = useState("")


    function handleButtonOnClick() {
        // TODO: hier Todo zusammenbauen und ans Backend geben (per POST-Request)
        console.log("Create new ToDo: " + todoInput)
        setTodoInput("")
    }

    function handleOnInputChange(event: ChangeEvent<HTMLInputElement>) {
        setTodoInput(event.target.value)
    }

    return (<div className={"add-todo-bar"}>
        <input className={"add-todo"} type={"text"} onChange={handleOnInputChange} value={todoInput}></input>
        <button className={"add-todo"} onClick={handleButtonOnClick}>Add Todo</button>
    </div>)
}