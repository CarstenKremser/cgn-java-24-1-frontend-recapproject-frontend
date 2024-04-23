import {useEffect, useState} from 'react'
import {Route, Routes} from "react-router";
import {TodoStatusColumnCard} from "./components/TodoStatusColumnCard.tsx";

import './App.css'
import {Todo} from "./data/todo.ts";
import axios from "axios";
import {TodoPage} from "./pages/todoPage.tsx";
import {EditPage} from "./pages/editPage.tsx";
import {AllStatusColumnCard} from "./components/AllStatusColumnCard.tsx";
import {Navigation} from "./components/Navigation.tsx";
import {AddTodo} from "./components/AddTodo.tsx";


export default function App() {

    const [todos, setTodos] = useState<Todo[]>([])

    function getTodos() {
        axios
            .get("/api/todo")
            .then(response =>
                setTodos(response.data)
        )
    }

    useEffect(() => getTodos(),[todos])


    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path="/" element={<AllStatusColumnCard todos={todos}/>}/>
                <Route path="/open" element={<TodoStatusColumnCard status={"OPEN"} todos={todos}/>}/>
                <Route path="/inprog" element={<TodoStatusColumnCard status={"IN_PROGRESS"} todos={todos}/>}/>
                <Route path="/done" element={<TodoStatusColumnCard status={"DONE"} todos={todos}/>}/>
                <Route path="/todo/:id" element={<TodoPage/>}/>
                <Route path="/edit/:id" element={<EditPage/>}/>
            </Routes>
            <AddTodo/>
        </div>
    );
}
