import React, {useState} from "react";
import {useTransition, animated} from 'react-spring';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const transitions = useTransition(todos, item => item.id, {
    from: {transform: 'translateY(-4rem)'},
    enter: {transform: 'translateY(0rem)'},
    leave: {transform: 'translateY(4rem)'},
  });

  const onSubmitHandler = evt => {
    evt.preventDefault();
    setTodos([...todos, {id: Date.now(), title: text}]);
    setText('');
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-between">
      <div>
        <Header/>
        <div className="bg-indigo-300 py-4 px-2">
          <form
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
            {transitions.map(({item, props, key}) =>
              <animated.li key={key} style={props} className="bg-white p-2 flex items-center justify-between">
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
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
