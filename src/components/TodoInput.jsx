import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [value, setValue] = useState("")
    const onSubmit = (e)=>{
        e.preventDefault();
        if(!value.trim()) return;
        addTodo(value);
        setValue("")
    }
  return (
      <form onSubmit={onSubmit} className="todo-input">
      <input
        type="text"
        placeholder="Nhập việc cần làm..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Thêm</button>
    </form>
  )
}

export default TodoInput
