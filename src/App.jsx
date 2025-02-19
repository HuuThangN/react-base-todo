import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import Header from './components/layout/header';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
const App = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: 'Learning React' },
        // { id: 2, name: 'Watching Youtube' },
    ]);

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 10000),
            name: name,
        };
        setTodoList([...todoList, newTodo]);
    };

    const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const removeElement = (id) => {
        const filteredItem = todoList.filter((item) => item.id !== id);
        setTodoList(filteredItem);
    };

    return (
        <>
            <Header />
            <div className="todo-container">
                <div className="todo-title">Todo List</div>

                <TodoNew addNewTodo={addNewTodo} />
                {todoList.length > 0 ? (
                    <TodoData todoList={todoList} removeElement={removeElement} />
                ) : (
                    todoList.length === 0 && (
                        <div className="todo-image">
                            <img className="logo" src={reactLogo} alt="" />
                        </div>
                    )
                )}
            </div>
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
