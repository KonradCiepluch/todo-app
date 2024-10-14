import styles from "./base.module.scss";
import { cx } from "../utils";
import { FiltersProps } from "./types";

const { wrapper, wrapperButton, wrapperButtonActive } = styles;

const allButtonArg: FiltersProps["activeFilter"] = "all";

const completedButtonArg: FiltersProps["activeFilter"] = "hideCompleted";

export const Filters = ({ activeFilter, handleActiveFilter }: FiltersProps) => {
  return (
    <div className={wrapper}>
      <button
        className={cx(
          wrapperButton,
          activeFilter === allButtonArg && wrapperButtonActive
        )}
        onClick={() => handleActiveFilter(allButtonArg)}
      >
        Show all
      </button>
      <button
        className={cx(
          wrapperButton,
          activeFilter === completedButtonArg && wrapperButtonActive
        )}
        onClick={() => handleActiveFilter(completedButtonArg)}
      >
        Hide completed
      </button>
    </div>
  );
};
