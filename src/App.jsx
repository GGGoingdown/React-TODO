import React from 'react';
import { useState, useEffect} from 'react';
import "./style.css";
import NewItemForm from './components/NewItemForm';
import TodoList from './components/TodoList';


export default function App() {
  const [todos, setTodos] = useState(()=>{
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : []
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  function addTodo(newItem) {
    setTodos(currentTodos => {
      return [...currentTodos, {
        id: crypto.randomUUID(),
        name: newItem,
        complete: false
      }]
    })
  }

  function toggleTodo(id, complete) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
      <NewItemForm addTodo={addTodo} />
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

