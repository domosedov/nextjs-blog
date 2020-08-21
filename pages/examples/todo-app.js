import React, {useReducer, useState, useEffect, useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useTransition, animated} from 'react-spring';
import Head from 'next/head';
import Layout from "../../components/layout";
import TodoItem from "../../components/todo-app/todoItem";

const initialTodoState = {
  todos: []
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todos: [...state.todos, action.payload]}
    default:
      return state;
  }
}

const TodoApp = () => {
  const [title, setTitle] = useState('');
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [{todos}, dispatch] = useReducer(todoReducer, initialTodoState);
  const todoInputRef = useRef(null);

  const showFormTransition = useTransition(formIsOpen, null, {
    from: {
      height: `0rem`
    },
    enter: {
      height: `4rem`
    },
    leave: {
      height: `0rem`
    },
    config: {
      duration: 200
    }
  });

  const todoListTransitions = useTransition(todos, item => item.id, {
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

  const handleTodoSubmit = evt => {
    evt.preventDefault();
    if (title) {
      dispatch({type: 'ADD_TODO', payload: {id: uuidv4(), title, completed: false}});
      setTitle('');
      todoInputRef.current.focus();
    }
  }

  const handleTodoInputChange = evt => {
    setTitle(evt.target.value);
  }

  const handleShowFormClick = evt => {
    evt.preventDefault();
    setFormIsOpen(!formIsOpen);
  }

  useEffect(() => {
    if (formIsOpen && todoInputRef.current && todoInputRef.current instanceof HTMLInputElement) {
      todoInputRef.current.focus();
    }
  }, [todoInputRef, formIsOpen])

  return (
    <Layout>
      <Head>
        <title>Todo App</title>
      </Head>
      <div className="bg-white shadow">
        <div className="grid grid-cols-12">
          <aside className="px-4 py-4 bg-gradient-to-b from-blue-400 to-indigo-600 col-start-1 col-end-4">
            <button
              className="block text-gray-100 mx-auto mb-4 duration-200 hover:text-white focus:outline-none transform focus:scale-125">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/>
              </svg>
            </button>
            <div className="text-white flex justify-between pb-2 mb-2 border-b border-indigo-400">
              <button className="inline-flex items-center">
                <svg className="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                Важные
              </button>
              <div className="">0</div>
            </div>
            <div className="text-white flex justify-between">
              <button className="inline-flex items-center">
                <svg className="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z"/>
                </svg>
                Список задач
              </button>
              <div className="">{todos.length}</div>
            </div>
          </aside>

          <div className="bg-white col-start-4 col-end-13">
            <div className="px-4 py-4 flex items-start justify-between bg-gray-300">
              <div className="relative">
                <button
                  className="text-indigo-300 duration-200 hover:text-indigo-600 focus:outline-none transform focus:scale-110">
                  <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z"/>
                  </svg>
                </button>
              </div>
              <h1 className="text-center text-2xl leading-none text-indigo-600 font-semibold uppercase">
                Список задач
              </h1>
              <button
                onClick={handleShowFormClick}
                className="text-indigo-500 duration-200 hover:text-indigo-600 focus:outline-none transform focus:scale-110">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  {
                    !formIsOpen ?
                      <path
                        d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/>
                      :
                      <path
                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/>
                  }
                </svg>
              </button>
            </div>

            {showFormTransition.map(({item, key, props}) =>
              item && <animated.div key={key} style={props} className="overflow-hidden flex items-center bg-gray-300">
                <form
                  className="px-4 h-full w-full flex items-center justify-between border-indigo-500"
                  onSubmit={handleTodoSubmit}
                >
                  <label
                    className="text-white px-2 py-1 rounded-l bg-gray-500"
                    htmlFor="add-todo">
                    Новая задача
                  </label>
                  <input
                    id="add-todo"
                    ref={todoInputRef}
                    className=" border-indigo-600 rounded-r bg-white flex-1 p-1 mr-2 duration-200 focus:rounded focus:outline-none focus:shadow-outline"
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleTodoInputChange}
                  />
                  <button
                    type="submit"
                    className="px-2 py-1 bg-indigo-600 rounded text-white duration-200 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                  >
                    Добавить
                  </button>
                </form>
              </animated.div>
            )}
            <ul className="px-4 py-4 space-y-2">
              {todoListTransitions.map(({ item, props, key }) =>
                <animated.li key={key} style={props}>
                  <TodoItem title={item.title}/>
                </animated.li>
              )}
            </ul>
          </div>
        </div>


      </div>
    </Layout>
  );
}

export default TodoApp;