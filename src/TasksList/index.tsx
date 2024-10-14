import styles from "./base.module.scss";
import { CheckMark } from "../Icons/CheckMark";
import { cx } from "../utils";
import { TasksListProps } from "./types";

const {
  wrapper,
  wrapperTask,
  wrapperTaskActive,
  wrapperTaskCheckbox,
  wrapperTaskRemove,
} = styles;

export const TasksList = ({
  tasks,
  handleRemoveTodo,
  handleToggleTodo,
}: TasksListProps) => {
  return (
    <ul className={wrapper}>
      {tasks.map(({ id, value, completed }) => (
        <li
          className={cx(wrapperTask, completed && wrapperTaskActive)}
          key={id}
          onClick={() => handleToggleTodo(id)}
        >
          <div className={wrapperTaskCheckbox}>
            <input type="checkbox" name="task" required />
            <CheckMark />
          </div>
          <span>{value}</span>
          <button
            className={wrapperTaskRemove}
            onClick={() => handleRemoveTodo(id)}
          >
            <span>x</span>
          </button>
        </li>
      ))}
    </ul>
  );
};
