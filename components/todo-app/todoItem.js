import React from 'react';

const TodoItem = ({title}) => {
  return (
    <div
      className="px-2 py-2 border rounded"
    >
      <div className="flex items-start justify-between">
        <div>
          {title}
        </div>
        <div className="inline-flex items-center space-x-1">
          <button className="px-2 py-2 bg-white rounded-full border-2 border-indigo-500 text-indigo-500 duration-200 hover:border-green-500 hover:bg-green-500 hover:text-white focus:outline-none focus:shadow-outline">
            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
            </svg>
          </button>
          <button className="px-2 py-2 bg-white rounded-full border-2 border-indigo-500 text-indigo-500 duration-200 hover:border-orange-400 hover:bg-orange-400 hover:text-white focus:outline-none focus:shadow-outline">
            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
            </svg>
          </button>
          <button className="px-2 py-2 bg-white rounded-full border-2 border-indigo-500 text-indigo-500 duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:shadow-outline">
            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;