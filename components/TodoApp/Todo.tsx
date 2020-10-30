import { ChangeEvent, memo, useReducer } from "react";
import { TodoType } from "./types";

type Props = {
  handleToggle: (id: string) => void;
  handleDelete: (id: string) => void;
  handleEditTitle: (id: string, title: string) => void;
  handleEditDescription: (id: string, description: string) => void;
} & TodoType;

const Todo = ({
  title,
  description,
  completed,
  id,
  handleToggle,
  handleDelete,
  handleEditTitle,
  handleEditDescription,
}: Props) => {
  const [isEditing, toggle] = useReducer((x) => !x, false);

  const handleChangeTitle = (evt: ChangeEvent<HTMLInputElement>) => {
    handleEditTitle(id, evt.target.value);
  };

  return (
    <li
      className={`${
        completed && "line-through"
      } p-2 bg-white rounded-lg shadow-md`}
    >
      <div className="flex flex-col w-full bg-green-100">
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={handleChangeTitle}
            onBlur={() => toggle()}
          />
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div>{title}</div>
              <div className="inline-flex space-x-2">
                {!isEditing && (
                  <button className="px-2 py-1 border" onClick={() => toggle()}>
                    Edit
                  </button>
                )}
                <button
                  className="px-2 py-1 border"
                  onClick={() => handleToggle(id)}
                >
                  Toggle
                </button>
                <button
                  className="px-2 py-1 border"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="bg-red-100">{description}</div>
          </>
        )}
      </div>
    </li>
  );
};

export default memo(Todo);
