import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

function Todo(props) {
  const list = useSelector((state) => state.todoReducers.list);
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  console.log(inputData);
  return (
    <div>
      <div className="todo">
        <h3>Todo List</h3>
        <input
          type="text"
          placeholder="Add..."
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        ></input>
        <button onClick={() => dispatch(addTodo(inputData), setInputData(""))}>
          Add
        </button>

        <div className="show">
          {list.map((elem) => {
            return (
              <div className="item" key={elem.id}>
                <span>{elem.data}</span>
                <button onClick={() => dispatch(deleteTodo(elem.id))}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            dispatch(removeTodo());
          }}
        >
          Remove All
        </button>
      </div>
    </div>
  );
}

export default Todo;
