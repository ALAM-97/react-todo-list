import React from "react";
//components
import Todo from "./Todo";
// style
import './TodoList.css';

const TodoList = (props) => {
  return ( 
    <div className="todo-list">
      {props.items.map(todo => 
        <Todo 
          todo={todo.todo}
          key={todo.id}
        />  
      )}
    </div>
  );
}

export default TodoList;