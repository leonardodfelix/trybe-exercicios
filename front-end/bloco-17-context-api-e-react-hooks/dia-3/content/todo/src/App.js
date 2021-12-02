import { useState } from "react";
// import TodoProvider from "./context/TodoContex";
import useTodo from "./hooks/useTodo";

function App() {
  // const { todos } = useContext(TodoProvider);
  const [input, setInput] = useState('');
  const { list, addTask, removeTask, clearTasks } = useTodo([])

  function onChange({ target: { value } }) {
    setInput(value);
  }

  return ( 
    <div>
      <label>
        Task:
        <input
          type="text"
          value={ input }
          onChange={ onChange }
        />
        <button type="button" onClick={ () => addTask(input) }>Save</button>
        <button type="button" onClick={ () => clearTasks() }>Clear all</button>
      </label>
      <ul>
        {console.log(list)}
        {console.log(input)}
        {list.map(task => (
          <li key={ task }>
            {task}
            <button type="button" onClick={ () => removeTask(task) }>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
