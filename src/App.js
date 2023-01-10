import "@fontsource/alata";
import './App.css';
import logo from './img/logo.png';
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <h1 className='App-title'>
        <img src={logo} alt="Logo" className='App-logo' /> React Tasks
      </h1>
      <TaskList />
    </div>
  );
}

export default App;
