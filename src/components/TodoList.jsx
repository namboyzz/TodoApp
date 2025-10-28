
const TodoList = ({todos, toggleTodo, deleteTodo}) =>{
    if(todos.length ===0){
        return <p className="empty">
            Chua co cong viec nao  🎯
        </p>
    }
  return (
      <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""} style={{
            background: "#fff", // nền sáng
            color: "#222", // ✅ chữ tối rõ
            padding: "10px 15px",
            marginBottom: "10px",
            borderRadius: "8px",
            width: "280px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          }}>
          <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
