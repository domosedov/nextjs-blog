import React, { useState } from "react";
import { useTransition, animated } from 'react-spring';
import Layout from '../components/layout';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const transitions = useTransition(todos, item => item.id, {
    from: {
      transform: 'translateX(-4rem)',
      opacity: 0
    },
    enter: {
      transform: 'translateX(0rem)',
      opacity: 1
    },
    leave: {
      transform: 'translateX(4rem)',
      opacity: 0
    },
  });

  const onSubmitHandler = evt => {
    evt.preventDefault();
    setTodos([...todos, { id: Date.now(), title: text }]);
    setText('');
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Layout>
      <div>
        <form
          className="bg-indigo-300 w-1/2 mx-auto rounded-lg p-2 mb-2"
          onSubmit={onSubmitHandler}
        >
          <label
            className="text-gray-900 mr-2"
            htmlFor="add-todo">
            Title:
              <input
              id="add-todo"
              className="border-b-2 border-indigo-600 bg-transparent"
              type="text"
              name="title"
              value={text}
              onChange={(evt) => setText(evt.target.value)}
            />
          </label>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 rounded text-white"
          >Add
            </button>
        </form>
        <ul className="space-y-2">
          {transitions.map(({ item, props, key }) =>
            <animated.li key={key} style={props} className="bg-white p-2 flex items-center justify-between border">
              <div>
                {item.title}
              </div>
              <button
                onClick={() => deleteTodo(item.id)}
                className="px-2 py-1 text-sm bg-red-700 text-white rounded">
                Delete
                </button>
            </animated.li>
          )}
        </ul>
      </div>
    </Layout>
  )
}
