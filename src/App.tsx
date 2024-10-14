import "./global.scss";
import { Form } from "./Form";
import { Filters } from "./Filters";
import { TasksList } from "./TasksList";
import { useTodoList } from "./hooks";

function App() {
  const {
    tasks,
    activeFilter,
    handleActiveFilter,
    handleAddTodo,
    handleRemoveTodo,
    handleToggleTodo,
  } = useTodoList();

  return (
    <main>
      <Form handleAddTodo={handleAddTodo} />
      <Filters
        activeFilter={activeFilter}
        handleActiveFilter={handleActiveFilter}
      />
      {tasks.length > 0 ? (
        <TasksList
          tasks={tasks}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleTodo}
        />
      ) : (
        <h2>
          {activeFilter === "all"
            ? "Add your first todo!"
            : "You completed all todos or haven't added any yet!"}
        </h2>
      )}
    </main>
  );
}

export default App;
