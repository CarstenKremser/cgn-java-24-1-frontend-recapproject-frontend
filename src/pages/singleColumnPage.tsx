import {TodoStatusColumnCard} from "../components/TodoStatusColumnCard.tsx";
import {Todo} from "../data/todo.ts";


type SingelColumnPageParams = {
    status: string,
    todos: Todo[]
}

export function SingleColumnPage({status, todos}: SingelColumnPageParams): JSX.Element {
    return (<>
            <ul className="status-columns single-column-layout">
                <li className="status-column">
                    <TodoStatusColumnCard status={status} todos={todos}/>
                </li>
            </ul>
        </>
    )
}