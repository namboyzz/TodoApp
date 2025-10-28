import { useState } from 'react'
import TodoList from "./components/TodoList";

import './App.css'
import TodoInput from './components/TodoInput';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo= (text) =>{
    if(!text.trim()) return ;
    setTodos([...todos, {id:Date.now(), text, completed: false}])
  }
  const toggleTodo = (id )=>{
    setTodos(
      todos.map((todo)=>
        todo.id === id ? {...todo, completed: !todo.completed}: todo
      )
    )
  }
  const deleteTodo = (id)=>{
    if(confirm("ban co muon xoa khong")){
      setTodos(todos.filter((todo)=>todo.id !== id))
    }
  }

  return (
    <>
    <div>
      <div className="app-container">
      <h1>📝 Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
    </div>
      
    </>
  )
}

export default App
