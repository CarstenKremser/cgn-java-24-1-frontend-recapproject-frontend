import '../assets/AddTodo.css'
import {ChangeEvent, useState} from "react";
import {Todo} from "../data/todo.ts";
import axios from "axios";

export function AddTodo() {

    const [todoInput, setTodoInput] = useState("")

    function handleButtonOnClick() {
        const newTodo:Todo = {
            id: crypto.randomUUID(),
            description: todoInput,
            status: "OPEN"
        }
        axios
            .post("/api/todo", newTodo)
            .then(() => {
                setTodoInput("")
            })
    }

    function handleOnInputChange(event: ChangeEvent<HTMLInputElement>) {
        setTodoInput(event.target.value)
    }

    return (<div className={"add-todo-bar"}>
        <input className={"add-todo"} type={"text"} onChange={handleOnInputChange} value={todoInput}></input>
        <button className={"add-todo"} onClick={handleButtonOnClick}>Add Todo</button>
    </div>)
}