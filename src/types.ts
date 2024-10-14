export type TodoType = { id: string; value: string; completed: boolean }[];

export type FilterTypes = "all" | "hideCompleted";

export type TodoListReturnType = {
  tasks: TodoType;
  activeFilter: FilterTypes;
  handleAddTodo: (value: string) => void;
  handleToggleTodo: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
  handleActiveFilter: (filter: FilterTypes) => void;
};
