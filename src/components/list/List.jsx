function List({ todo }) {
  return (
    <div>
      <section className='main'>
        <input className='toggle-all' type='checkbox' />
        <label htmlFor='toggle-all'>Mark all as complete</label>

        <ul className='todo-list'>
          {todo.map((todo, e) => (
            <li key={e}>
              <div className='view'>
                <input className='toggle' type='checkbox' />
                <label>{todo}</label>
                <button className='destroy'></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default List;
