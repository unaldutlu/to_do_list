import React from "react";
import { useEffect } from "react";

function List({ todo, setTodo }) {
  const onChangeList = (id) => {
    setTodo((todo) =>
      todo.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    );
  };

  return (
    <div>
      <section className='main'>
        <input className='toggle-all' type='checkbox' />
        <label htmlFor='toggle-all'>Mark all as complete</label>

        <ul className='todo-list'>
          {todo.map((todoItem) => (
            <li key={todoItem.id}>
              <div className='view'>
                <input
                  className='toggle'
                  type='checkbox'
                  value={todoItem.isCompleted}
                  onChange={() => onChangeList(todoItem.id)}
                />
                <label className={`${todoItem.isCompleted ? "completed" : ""}`}>
                  {todoItem.form}
                </label>
                <button
                  className='destroy'
                  // onClick={() => deleteButton(todoItem.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default List;
