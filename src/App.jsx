import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';

const App = () => {
    const test = 'huuthang';
    const age = 25;
    const data = {
        address: 'danang',
        country: 'vietnam',
    };

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew />
            <TodoData name={test} age={age} data={data} />
            <div className="todo-image">
                <img className="logo" src={reactLogo} alt="" />
            </div>
        </div>
    );
};

export default App;
