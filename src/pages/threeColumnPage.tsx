import {TodoStatusColumnCard} from "../components/TodoStatusColumnCard.tsx";
import {Todo} from "../data/todo.ts";


type ThreeColumnPageParams = {
    todos: Todo[]
}

export function ThreeColumnPage({todos}: ThreeColumnPageParams): JSX.Element {
    return (<>
            <ul className="status-columns three-column-layout">
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