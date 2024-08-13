import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </>
  );

  function Task({ title, description }) {
    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

export default App;
