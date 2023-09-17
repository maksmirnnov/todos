import { useSelector } from "react-redux"
import { IState } from "../types/state"
import { TodoCard } from "./TodoCard/TodoCard"
import { ITodo } from "../types/todo"

export default function TodoList() {
    const todos = useSelector((state: IState) => state.todos.todos)

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                justifyItems: 'center',
                gap: '20px',
                padding: '20px'
            }}
        >
            {todos.map((todo: ITodo) => <TodoCard key={todo.id} todo={todo}/>)}
        </div>
    )
}
