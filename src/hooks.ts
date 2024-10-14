import { useState, useCallback, useMemo, useLayoutEffect } from "react";
import { v4 } from "uuid";
import { TodoListReturnType, TodoType, FilterTypes } from "./types";

const availableFilters: FilterTypes[] = ["all", "hideCompleted"];

export const useTodoList = (): TodoListReturnType => {
  const [tasks, setTasks] = useState<TodoType>([]);
  const [activeFilter, setActiveFilter] = useState<FilterTypes>("all");

  useLayoutEffect(() => {
    const filter = localStorage.getItem("filter") || "";

    try {
      const parsedFilter = JSON.parse(filter);

      if (parsedFilter && availableFilters.includes(parsedFilter))
        setActiveFilter(parsedFilter);
    } catch (e) {
      console.error(e);
    }

    const todos = localStorage.getItem("todos") || "";

    try {
      const parsedTodos = JSON.parse(todos);

      if (parsedTodos && Array.isArray(parsedTodos)) setTasks(parsedTodos);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const activeTasks = useMemo(() => {
    const isHideCompleted = activeFilter === "hideCompleted";

    return tasks.filter((task) => (isHideCompleted ? !task.completed : task));
  }, [activeFilter, tasks]);

  const handleAddTodo = useCallback((value: string) => {
    const id = v4();
    const todo = { id, value, completed: false };
    setTasks((prev) => {
      const todos = [...prev, todo];
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    });
  }, []);

  const handleToggleTodo = useCallback((id: string) => {
    setTasks((prev) => {
      const todos = prev.reduce<TodoType>((acc, value) => {
        if (id === value.id)
          return [...acc, { ...value, completed: !value.completed }];
        return [...acc, value];
      }, []);
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    });
  }, []);

  const handleRemoveTodo = useCallback((id: string) => {
    setTasks((prev) => {
      const todos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    });
  }, []);

  const handleActiveFilter = useCallback(
    (filter: FilterTypes) => {
      if (filter === activeFilter) return;
      setActiveFilter(filter);
      localStorage.setItem("filter", JSON.stringify(filter));
    },
    [activeFilter]
  );

  return {
    tasks: activeTasks,
    activeFilter,
    handleAddTodo,
    handleRemoveTodo,
    handleActiveFilter,
    handleToggleTodo,
  };
};
