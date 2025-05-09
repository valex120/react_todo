import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Функция добавления новой задачи с проверкой на пустой ввод
  const addTodo = () => {
    if (!input.trim()) {
      setShowAlert(true);
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setInput("");
    setShowAlert(false);
  };

  // Функция удаления задачи по id
  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // Функция переключения состояния задачи (вычёркивание)
  const toggleTodo = (id) => {
    setTodos(prevTodos =>
        prevTodos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
  };

  // Возможность ввода через клавишу Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
      <div className="container mt-5" style={{ maxWidth: "600px" }}>
        <h2 className="mb-4">Список Дел</h2>
        <div className="input-group mb-3">
          <input
              type="text"
              className="form-control"
              placeholder="Введите задачу"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
          />
          <button className="btn btn-primary" onClick={addTodo}>
            Добавить
          </button>
        </div>
        {showAlert && (
            <div className="alert alert-danger" role="alert">
              Поле ввода не должно быть пустым!
            </div>
        )}
        <ul className="list-group">
          {todos.map((todo) => (
              <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
              />
          ))}
        </ul>
      </div>
  );
};

export default App;
