import {TodoStatusColumnCard} from "./TodoStatusColumnCard.tsx";
import {Todo} from "../data/todo.ts";


type AllStatusColumnCardParams = {
    todos: Todo[]
}

export function AllStatusColumnCard({todos}: AllStatusColumnCardParams): JSX.Element {
    return (<>
            <ul className="status-columns">
                <li className="status-column">
                    <TodoStatusColumnCard status={"OPEN"} todos={todos}/>
                </li>
                <li className="status-column">
                    <TodoStatusColumnCard status={"IN_PROGRESS"} todos={todos}/>
                </li>
                <li className="status-column">
                    <TodoStatusColumnCard status={"DONE"} todos={todos}/>
                </li>
            </ul>
        </>
    )
}