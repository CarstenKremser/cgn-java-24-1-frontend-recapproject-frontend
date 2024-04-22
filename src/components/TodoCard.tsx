import {Todo} from "../data/todo.ts";


type TodoCardParams = {
    todo: Todo,
}

export function TodoCard({todo}: TodoCardParams) {
    return (<>
        <h3>TodoCard</h3>
        <p>Id is {todo.id}</p>
        <p>{todo.description}</p>
        <p>Details</p>
        <p>Edit</p>
        <p>Progress</p>
    </>)
}