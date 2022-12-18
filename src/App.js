
import './App.css';

// インポート文
import TodoList from './TodoList';
import { useState } from 'react';

//【React入門】完全初心者OK！１から簡単なTodoアプリを作ってReactの１歩を踏み出してみよう ~Reactチュートリアル~
// ～29:35


function App() {
  const [todos,setTodos] = useState(["Todo1","Todo2"]);
  return (
    <div className="App">
      <TodoList todos={todos}/>
      <input type='text'/>
      <button>Add Task</button>
      <button>Remove Task</button>
      <div>Incomplete Task:0</div>

    </div>
  );
}

export default App;
