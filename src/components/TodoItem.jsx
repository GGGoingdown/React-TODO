import React from 'react'

export default function TodoItem({todo, toggleTodo, deleteTodo}) {
    return (
        <li>
            <label >
                <input type="checkbox" checked={todo.complete} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                {todo.name}
            </label>

            <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}
