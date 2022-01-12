import React, { useState } from "react";
import './TodoForm.css';

const TodoForm = (props) => {

  const [todoValue, setTodoValue] = useState('');

  const todoValueHandler = (event) => {
    setTodoValue(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(todoValue)
    const todoData = {
      todo: todoValue
    }

    props.onSaveTodoData(todoData);
    setTodoValue('');

  }

  return ( 
    <form onSubmit={ onSubmitHandler }>
      <input 
        type="text"
        value= { todoValue }
        onChange={ todoValueHandler }
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default TodoForm;
