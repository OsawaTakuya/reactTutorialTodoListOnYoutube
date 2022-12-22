
import './App.css';

// インポート文
import TodoList from './TodoList';
import { useState } from 'react';

//【React入門】完全初心者OK！１から簡単なTodoアプリを作ってReactの１歩を踏み出してみよう ~Reactチュートリアル~
// ～35:10


function App() {
  const [todos,setTodos] = useState(
    [
      {id:1,name:'Todo1',completed:false},
      {id:2,name:'Todo2',completed:false},
    ]
  );
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
