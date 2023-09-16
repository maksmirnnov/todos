import { ITodo } from "../../types/todo";
import styles from './TodoCard.module.css'

export function TodoCard(props: {todo: ITodo}) {
    const { todo } = props

    return (
        <div className={styles.todoCard}>
            <div className={styles.title_status}>
                <p className={styles.title}>{todo.title}</p>
                <p className={styles.status} style={{color: todo.completed ? '#388e3c' : '#1565c0'}}>{todo.completed ? 'Done' : 'Open'}</p>
            </div>
            <p className={styles.description}>{todo.description}</p>
            <div className={styles.buttons}>
                <button>Выполнить</button>
                <button>Удалить</button>
            </div>
        </div>
    )
}
