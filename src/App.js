import React, { useState } from 'react';
import NewTodo from './Form/NewTodo';

const DUMMY_TODOS = [{
    id: 1,
    todo: 'Fare la spesa'
  },
  {
    id: 2,
    todo: 'Studiare'
  }
];

const App = () => {

  const [todos, setTodos] = useState(DUMMY_TODOS);

  const addTodoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [todos, ...prevTodos];
    })
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <NewTodo onAddTodo={ addTodoHandler } />
    </div>
  );
}

export default App;
