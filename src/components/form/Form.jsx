import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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
    setTodo([
      ...todo,
      { id: uuidv4(), form: form, isEditable: false, isCompleted: false },
    ]);
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
