import {TodoCard} from "./TodoCard.tsx";
import {Todo} from "../data/todo.ts";
import '../assets/styles.css';
import {useEffect, useState} from "react";

type TodoStatusColumnCardParams = {
    status: string,
    todos: Todo[]
}

type WrappedCardParams = {
    todo: Todo
}

export function TodoStatusColumnCard({status, todos}: TodoStatusColumnCardParams): JSX.Element {

    const [selectedTodos, setSelectedTodos] = useState<Todo[]>([])

    useEffect(() => {
            setSelectedTodos(todos.filter((todo: Todo) => todo.status === status))
        },
        [todos])

    return (<>
        <div className="status-column-card">
            <h2>TodoStatusColumnCard {status}</h2>
            <p>links to open - in_prog - done</p>
            <ul className="cards-list">
                {selectedTodos.map((el: Todo) => {
                    return <WrappedCard key={el.id} todo={el}/>
                })}
            </ul>
        </div>
    </>)
}

function WrappedCard({todo}: WrappedCardParams): JSX.Element {
    return (<>
            <li key={todo.id}>
                <TodoCard key={todo.id} todo={todo}/>
            </li>
        </>
    )
}