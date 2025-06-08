import React from "react";

//Реализация отдельного компонента для кнопки и/или для самой задачи
const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </span>
            </div>
            <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => onDelete(todo.id)}>
                Удалить
            </button>
        </li>
    );
};

export default TodoItem;
