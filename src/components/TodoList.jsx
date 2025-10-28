
const TodoList = ({todos, toggleTodo, deleteTodo}) =>{
    if(todos.length ===0){
        return <p className="empty">
            Chua co cong viec nao  🎯
        </p>
    }
  return (
      <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
