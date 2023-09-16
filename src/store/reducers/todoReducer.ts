import { ITodo } from '../../types/todo'

export const ADD_TODO:string = 'ADD_TODO'
export const REMOVE_TODO:string = 'REMOVE_TODO'

interface IInitialState {
    todos: ITodo[]
}

const initialState:IInitialState = {
    todos: [
        {id: 1, title: 'todo 1', description: 'my todo 1', completed: false},
        {id: 2, title: 'todo 2', description: 'my todo 2', completed: false},
        {id: 3, title: 'todo 3', description: 'my todo 3', completed: true},
    ]
}

export const todoReducer = (state:{todos: ITodo[]} = initialState, action:{type: string, payload: ITodo | number}) => {
    switch(action.type){
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case REMOVE_TODO:
            return {...state, todos: [...state.todos.filter((todo: ITodo) => todo.id !== action.payload)]}
        default:
            return state
    }
}

export const addTodoActionCreator = (payload: ITodo) => ({type: ADD_TODO, payload})
export const removeTodoActionCreator = (payload: number) => ({type: REMOVE_TODO, payload})
