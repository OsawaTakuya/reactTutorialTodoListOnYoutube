
import './App.css';

// インポート文
import TodoList from './TodoList';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

//【React入門】完全初心者OK！１から簡単なTodoアプリを作ってReactの１歩を踏み出してみよう ~Reactチュートリアル~
// ～55:10


function App() {

  const todoNameRef = useRef();
  const handleAddTodo = () => {
    //Add task
    const id = uuidv4();
    const name = todoNameRef.current.value
    setTodos((prevTodos) => {
      return [...prevTodos, { id: id, name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [ ...todos ];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };



  const [todos, setTodos] = useState(
    [
    ]
  );

  return (

    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type='text' ref={todoNameRef} />
      <button onClick={handleAddTodo} >Add Task</button>
      <button>Remove Task</button>
      <div>Incomplete Task:{todos.filter((todo)=>!todo.completed).length}</div>

    </div>
  );
}

export default App;
