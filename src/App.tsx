import {useEffect, useState} from 'react'
import {Route, Routes} from "react-router";

import './App.css'
import {Todo} from "./data/todo.ts";
import axios from "axios";
import {TodoPage} from "./pages/todoPage.tsx";
import {EditPage} from "./pages/editPage.tsx";
import {Navigation} from "./components/Navigation.tsx";
import {AddTodo} from "./components/AddTodo.tsx";
import {ThreeColumnPage} from "./pages/threeColumnPage.tsx";
import {SingleColumnPage} from "./pages/singleColumnPage.tsx";


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
                <Route path="/" element={<ThreeColumnPage todos={todos}/>}/>
                <Route path="/open" element={<SingleColumnPage status={"OPEN"} todos={todos}/>}/>
                <Route path="/inprog" element={<SingleColumnPage status={"IN_PROGRESS"} todos={todos}/>}/>
                <Route path="/done" element={<SingleColumnPage status={"DONE"} todos={todos}/>}/>
                <Route path="/todo/:id" element={<TodoPage/>}/>
                <Route path="/edit/:id" element={<EditPage/>}/>
            </Routes>
            <AddTodo/>
        </div>
    );
}
