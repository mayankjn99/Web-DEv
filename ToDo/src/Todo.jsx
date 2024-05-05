import  { useState } from 'react'
import AddItem from './components/AddItem'
import TodoList from './components/TodoList'

const Todo = () => {
    const [todos, setTodos] = useState([])

    const addTodos = (text) => {
      // console.log('item', text)
      const newTodo = { id: Date.now(), text };
       setTodos([...todos, newTodo]);
  
    }
  return (
    <div className="todo-app">
        <AddItem addTodos={addTodos}/>
        <TodoList todos={todos}/>
    </div>
  )
}

export default Todo
