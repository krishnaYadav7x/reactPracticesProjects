import React from "react";
import Button from "./Button";

export default function TodoLists({
  todos = [],
  setTodos,
  setEditingId,
  editingId,
  isEditing,
  setIsEditing,
  setInputValue,
}) {
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setEditingId(id);
    setIsEditing(true);
  };


  const saveTodo = () => {
    setIsEditing(false);
  };

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="list-items">
            {isEditing && editingId === todo.id ? (
              <input
                type="text"
                value={todo.todoText}
                onChange={(e) =>
                  setTodos((prev) =>
                    prev.map((item) =>
                      item.id === editingId
                        ? { ...item, todoText: e.target.value }
                        : item,
                    ),
                  )
                }
              />
            ) : (
              <span>{todo.todoText}</span>
            )}
            <div className="edit-save-btn">
              {isEditing && editingId === todo.id ? (
                <Button
                  className="edit-btn"
                  label={"Save"}
                  onClick={() => saveTodo(todo.id)}
                />
              ) : (
                <Button
                  className="edit-btn"
                  label={"Edit"}
                  onClick={() => editTodo(todo.id)}
                />
              )}
              <Button
                className="delete-btn"
                label={"Delete"}
                onClick={() => deleteTodo(todo.id)}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
