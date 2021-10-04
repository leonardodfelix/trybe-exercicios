import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// const taskList = ['Lavar a louça', 'Fazer compras', 'Fornicar'];

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

// function App() {
//   return taskList.map(task => Task(task));
// }

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
