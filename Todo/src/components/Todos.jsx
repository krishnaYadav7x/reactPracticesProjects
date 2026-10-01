import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import Button from "./Button";
import TodoLists from "./TodoLists";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddTodo = () => {
    if (inputValue === "") return;
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), todoText: inputValue },
    ]);
  };

  useEffect(() => {
    console.log(editingId);
  }, [editingId]);

  return (
    <main>
      <div className="todos-container">
        <div className="input-container">
          <TodoInput onChange={setInputValue} value={inputValue} />
          <Button
            label={"Add"}
            onClick={() => {
              handleAddTodo();
              setInputValue("");
            }}
          />
        </div>
        <div>
          <TodoLists
            todos={todos}
            setTodos={setTodos}
            editingId={editingId}
            setEditingId={setEditingId}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setInputValue={setInputValue}
          />
        </div>
      </div>
    </main>
  );
}
