import React from 'react'
import TodoItem from './TodoItem'


export default function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className='list'>
            {todos.length === 0 && <li className='empty'>No items</li>}
            {todos.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                )
            })}
        </ul>
    )
}
