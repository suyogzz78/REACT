import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/TodoSlice'
import { Trash2 } from 'lucide-react' // ✅ Delete icon

function Todo() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
          📝 My Todos
        </h1>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition-all duration-200 border border-gray-700 rounded-xl px-4 py-3 shadow-sm"
            >
              <span className="text-gray-100 text-lg">{todo.text}</span>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-gray-400 hover:text-red-500 transition-all duration-200 p-1.5 rounded-lg hover:bg-gray-700"
                title="Delete todo"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No todos yet 😴</p>
        )}
      </div>
    </div>
  )
}

export default Todo
