import { ITodo } from "./todo";

export interface IState {
    todos: {
        todos: ITodo[]
    }
}