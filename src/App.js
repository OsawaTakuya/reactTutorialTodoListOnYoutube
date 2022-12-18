
import logo from './logo.svg';
import './App.css';

// インポート文
import TodoList from './TodoList';
import { useState } from 'react';


function App() {
  const [todos,setTodos] = useState();
  console 
  return (
    <div className="App">
      <TodoList />
      <input type='text'/>
      <button>Add Task</button>
      <button>Remove Task</button>
      <div>Incomplete Task:0</div>

    </div>
  );
}

export default App;
