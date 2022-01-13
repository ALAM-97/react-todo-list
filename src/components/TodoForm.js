import React, { useState } from "react";
// style
import './TodoForm.css';

const TodoForm = (props) => {
    const [todoInput, setTodoInput] = useState('');

    const todoInputHandler = (event) => {
      setTodoInput(event.target.value)
    }

    const onSubmitHandler = (event) => {
      event.preventDefault();
      console.log(todoInput)

      const newTodo = {
        todo: todoInput,
        id: Math.random().toString()
      };

      props.onAddNewTodo(newTodo);
      setTodoInput('')
    }

    return ( 
      <form onSubmit={ onSubmitHandler }>
          <input 
            type="text"
            placeholder="Inserisci un nuovo To Do" 
            value={ todoInput }
            onChange={ todoInputHandler }
          />
          <button type="submit">Add</button>
      </form>
    );
}

export default TodoForm;