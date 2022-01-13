import React from "react";
//style
import './Todo.css';

const Todo = (props) => {

  // const deleteHandler = () => {
  //   props.onDelete(props.id);
  // }

  return ( 
    <div className="todo">
      <p>{ props.todo }</p>
      <div className="square"></div>
    </div>
  );
}

export default Todo;
