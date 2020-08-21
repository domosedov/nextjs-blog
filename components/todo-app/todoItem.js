import React from 'react';

const TodoItem = ({title}) => {
  return (
    <div
      className="px-2 py-2 border"
    >
      {title}
    </div>
  );
}

export default TodoItem;