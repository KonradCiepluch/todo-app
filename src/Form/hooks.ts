import { useState } from "react";
import { TodoListReturnType } from "../types";

export const useForm = (handleAddTodo: TodoListReturnType["handleAddTodo"]) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (value.length < 2)
      return setError("Task input should have at least 2 characters");
    if (error.length) setError("");
    setValue("");
    handleAddTodo(value);
  };

  return {
    error,
    value,
    setValue,
    handleSubmit,
  };
};
