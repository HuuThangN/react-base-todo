import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

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

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>

            <TodoNew addNewTodo={addNewTodo} />
            {todoList.length > 0 ? (
                <TodoData todoList={todoList} />
            ) : (
                todoList.length === 0 && (
                    <div className="todo-image">
                        <img className="logo" src={reactLogo} alt="" />
                    </div>
                )
            )}
        </div>
    );
};

export default App;
