import { useImmer } from "use-immer";
import produce from "immer";
import { useFormik } from "formik";
import * as Yup from "yup";
import Container from "../../components/Layout/Container";
import { v4 as uuid } from "uuid";
import { TodoType } from "../../components/TodoApp/types";
import Todo from "../../components/TodoApp/Todo";
import { useCallback } from "react";

const addTodo = produce((draft, todo: TodoType) => {
  draft.push(todo);
});

const toggleTodo = produce((draft, id: string) => {
  const todo = draft.find((t: TodoType) => t.id === id);
  todo.completed = !todo.completed;
});

const deleteTodo = produce((draft, id: string) => {
  const index = draft.findIndex((t: TodoType) => t.id === id);
  if (index !== -1) draft.splice(index, 1);
});

const editTodoTitle = produce((draft, id: string, title: string) => {
  const todo = draft.find((t: TodoType) => t.id === id);
  todo.title = title;
});

const editTodoDescription = produce(
  (draft, id: string, description: string) => {
    const todo = draft.find((t: TodoType) => t.id === id);
    todo.title = description;
  }
);

const TodoApp = (_props: any) => {
  const [todos, setTodos] = useImmer<TodoType[]>([]);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().max(100, "Must be 100 chars or less").required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setTodos((prevTodos) =>
        addTodo(prevTodos, {
          title: values.title,
          description: values.description,
          completed: false,
          id: uuid(),
        })
      );
      resetForm();
    },
  });

  const handleToggle = useCallback((id: string) => {
    setTodos((prevTodos) => toggleTodo(prevTodos, id));
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTodos((prevTodos) => deleteTodo(prevTodos, id));
  }, []);

  const handleEditTitle = useCallback((id: string, title: string) => {
    setTodos((prevTodos) => editTodoTitle(prevTodos, id, title));
  }, []);

  const handleEditDescription = useCallback(
    (id: string, description: string) => {
      setTodos((prevTodos) => editTodoDescription(prevTodos, id, description));
    },
    []
  );

  return (
    <Container>
      <h1 className="text-6xl text-center font-semibold text-gray-900">
        TodoApp
      </h1>
      <div className="flex space-x-4">
        <div className="p-4 rounded-lg shadow-lg bg-white w-1/5">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="text-center text-lg text-gray-900">New Todo</h2>
            <div className="space-y-2">
              <div className="flex flex-col">
                <label className="text-sm text-gray-800" htmlFor="todoTitle">
                  Title
                </label>
                <input
                  className="border border-indigo-200 rounded p-1"
                  type="text"
                  name="title"
                  id="todoTitle"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-sm text-gray-800"
                  htmlFor="todoDescription"
                >
                  Description
                </label>
                <textarea
                  className="border border-indigo-200 rounded p-1 resize-y"
                  name="description"
                  id="todoDescription"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </div>
              <button
                className="px-4 py-2 rounded bg-indigo-600 text-white"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="w-4/5">
          <ul className="space-y-2">
            {todos.length > 0 &&
              todos.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  handleToggle={handleToggle}
                  handleDelete={handleDelete}
                  handleEditTitle={handleEditTitle}
                  handleEditDescription={handleEditDescription}
                />
              ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default TodoApp;
