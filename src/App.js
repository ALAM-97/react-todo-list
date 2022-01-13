import React, { useState } from 'react';
// components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const DUMMY_TODOS = 
  [{
    todo: 'Fare la spesa',
    id: 't1'
  },
  {
    todo: 'Studiare',
    id: 't2'
  }
];

const App = () => {

  const [todos, setTodos] = useState(DUMMY_TODOS);

  const addNewTodoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    })
  }

  // const deleteItemHandler = todoId => {
  //   setTodos(prevTodos => {
  //     const updatedTodos = prevTodos.filter(todo => todo.id !== todoId);
  //     return updatedTodos;
  //   });
  // };


  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoForm onAddNewTodo={ addNewTodoHandler } />
      <TodoList items={ todos } onDeleteItem={deleteItemHandler} />
    </div>
  );
}

export default App;
