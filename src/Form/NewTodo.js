import React from "react";
import TodoForm from './TodoForm';

const NewTodo = (props) => {
    const saveTodoDataHandler = (enteredTodoData) => {
        const todoData = {
            ...enteredTodoData,
            id: Math.random().toString()
        }
        props.onAddTodo(todoData);
    };

    return ( 
        <TodoForm onSaveTodo={ saveTodoDataHandler } />
    );
}

export default NewTodo;