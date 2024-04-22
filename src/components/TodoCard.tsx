import {Todo} from "../data/todo.ts";
import {Link} from "react-router-dom";
import '../assets/styles.css';


type TodoCardParams = {
    todo: Todo,
}

export function TodoCard({todo}: TodoCardParams) {
    return (<>
        <div className="todo-card">
            <h3>TodoCard</h3>
            <p>Id is {todo.id}</p>
            <p>{todo.description}</p>
            <Link to={"/todo/" + todo.id}>Details</Link>
            <p>Edit</p>
            <p>Progress</p>
        </div>
    </>)
}