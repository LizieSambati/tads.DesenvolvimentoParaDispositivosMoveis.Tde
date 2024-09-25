import { useState } from "react";

type ToDoProps = {
    id: number;
    title: string;
    description?: string;
    done: boolean;
}

export function useTodo() {

    const [todoList, setTodoList] = useState<ToDoProps[]>([])

    const createTodo = (title: string, description?: string) => {
        const newTodoListArray = [
            ...todoList,
            { id: new Date().getTime(), title, description, done: false },
        ];
        setTodoList(newTodoListArray);
    };

    const deleteTodo = (id: number) => {
        const newTodoListArray = todoList.filter((td) => td.id !== id);
        setTodoList(newTodoListArray);
    };

    const markAsDone = (id: number) => {
        const newTodoListArray = todoList.map((td) => {
            if (td.id === id) {
                return { ...td, done: !td.done };
            }
            return td;
        });
        setTodoList(newTodoListArray);
    };

    return { createTodo, deleteTodo, markAsDone, todoList };
}

export default useTodo;