import { useState, useEffect } from "react";
import Form from "../form/Form";
import List from "../list/List";
import Button from "../button/Button";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div>
      <section className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <Form todo={todo} setTodo={setTodo} />
        </header>
        <List todo={todo} setTodo={setTodo} status={status} />
        <Button todo={todo} setTodo={setTodo} setStatus={setStatus} />
      </section>
      <footer className='info'>
        <p>Click to edit a todo</p>
        <p>
          Created by <a href='https://github.com/unaldutlu'>Ünal Dutlu</a>
        </p>
        <p className='bottom'>
          <a href='https://www.linkedin.com/feed/'>My Linkedin Address</a>
        </p>
      </footer>
    </div>
  );
}

export default Todo;
