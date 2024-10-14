import styles from "./base.module.scss";
import { ChevronRight } from "../Icons/ChevronRight";
import { FormProps } from "./types";
import { useForm } from "./hooks";

const { wrapper, wrapperInput, wrapperSubmit, wrapperError } = styles;

export const Form = ({ handleAddTodo }: FormProps) => {
  const { error, value, setValue, handleSubmit } = useForm(handleAddTodo);

  return (
    <form className={wrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task input"
        className={wrapperInput}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={wrapperSubmit} type="submit">
        <ChevronRight />
      </button>
      {error.length ? <p className={wrapperError}>{error}</p> : null}
    </form>
  );
};
