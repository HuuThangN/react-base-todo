import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';

const App = () => {
    const name = 'huuthang';
    const age = 25;
    const data = {
        address: 'danang',
        country: 'vietnam',
    };

    const addNewTodo = (name) => {
        alert(`call me ${name}`);
    };

    // addNewTodo();

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            <TodoData
                name={name}
                age={age}
                data={data} />
            <div className="todo-image">
                <img className="logo" src={reactLogo} alt="" />
            </div>
        </div>
    );
};

export default App;
