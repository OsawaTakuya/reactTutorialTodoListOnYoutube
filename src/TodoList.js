
// インポート文
// syntax:import [moduleName] from '[filePath]'
import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,toggleTodo}) => {
  return todos.map((todo)=>{return <Todo todo={todo} toggleTodo={toggleTodo} key={todo.id} />});
};



// エクスポート文
// syntax: export (default) [variableName...]
// defaultあり-> エクスポート対象がひとつ
// defaultなし-> エクスポート対象が複数
export default TodoList