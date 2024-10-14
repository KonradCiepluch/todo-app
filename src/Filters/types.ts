import { TodoListReturnType } from "../types";

export type FiltersProps = Pick<
  TodoListReturnType,
  "activeFilter" | "handleActiveFilter"
>;
