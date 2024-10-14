import { TodoListReturnType } from "../types";

export type TasksListProps = Pick<
  TodoListReturnType,
  "handleRemoveTodo" | "handleToggleTodo" | "tasks"
>;
