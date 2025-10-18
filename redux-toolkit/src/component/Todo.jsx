import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from '../features/todo/TodoSlice';
import { Trash2, Edit2, Check, Plus } from 'lucide-react';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // For adding a new todo
  const [newTodo, setNewTodo] = useState('');

  // For editing existing todos
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Start editing a todo
  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  // Save edited todo
  const saveEdit = (id) => {
    dispatch(updateTodo({ id, text: editingText }));
    setEditingId(null);
    setEditingText('');
  };

  // Add new todo
  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-2xl mx-4">
        <h1 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
          📝 My Todos
        </h1>

        {/* Add new todo */}
        <div className="flex mb-4">
          <input
            className="flex-1 px-3 py-2 rounded-l-xl text-gray-900"
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-r-xl flex items-center justify-center"
          >
            <Plus size={20} />
          </button>
        </div>

        {/* Todo list */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition-all duration-200 border border-gray-700 rounded-xl px-4 py-3 shadow-sm"
            >
              {editingId === todo.id ? (
                <input
                  className="text-gray-900 text-lg rounded px-2 py-1 flex-1 mr-2"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <span className="text-gray-100 text-lg">{todo.text}</span>
              )}

              <div className="flex items-center space-x-2">
                {editingId === todo.id ? (
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="text-green-400 hover:text-green-500 transition-all duration-200 p-1.5 rounded-lg hover:bg-gray-700"
                    title="Save todo"
                  >
                    <Check size={20} />
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(todo)}
                    className="text-gray-400 hover:text-yellow-400 transition-all duration-200 p-1.5 rounded-lg hover:bg-gray-700"
                    title="Edit todo"
                  >
                    <Edit2 size={20} />
                  </button>
                )}

                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-gray-400 hover:text-red-500 transition-all duration-200 p-1.5 rounded-lg hover:bg-gray-700"
                  title="Delete todo"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No todos yet 😴</p>
        )}
      </div>
    </div>
  );
}

export default Todo;
