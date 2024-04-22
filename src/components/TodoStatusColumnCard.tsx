import {TodoCard} from "./TodoCard.tsx";
import {Todo} from "../data/todo.ts";

type TodoStatusColumnCardParams = {
    status: string,
    todos: Todo[]
}

export function TodoStatusColumnCard({status, todos}: TodoStatusColumnCardParams) {

    const selectedTodos: Todo[] = todos.filter((todo: Todo) => todo.status === status);

    return (<>
        <h2>TodoStatusColumnCard {status}</h2>
        <p>links to open - in_prog - done</p>
        {selectedTodos.map((todo: Todo) => (<TodoCard key={todo.id} todo={todo} />))}
    </>)
}