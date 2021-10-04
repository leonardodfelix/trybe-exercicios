import './App.css';

const taskList = ['Lavar a louça', 'Fazer compras', 'Fornicar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return taskList.map(task => Task(task));
}

export default App;
