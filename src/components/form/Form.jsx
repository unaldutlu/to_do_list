import { useState, useEffect } from "react";

function Form({ todo, setTodo }) {
  const [form, setForm] = useState("");

  useEffect(() => {
    setForm("");
  }, [todo]);

  const onChangeInput = (e) => {
    setForm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, form]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='form'
          value={form}
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          autoComplete='off'
          onChange={onChangeInput}
        />
      </form>
    </div>
  );
}

export default Form;
