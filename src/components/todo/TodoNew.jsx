import { useState } from 'react';
const TodoNew = (props) => {
    //  useState hook
    // const valueInput = "";
    const [valueInput, setValueInput] = useState();

    const { addNewTodo } = props;

    // addNewTodo('huuthang');
    //  fire
    const handleClick = () => {
        addNewTodo(valueInput);
    };
    const handleOnChange = (name) => {
        setValueInput(name);
    };
    return (
        <div className="todo-new">
            <input
                type="text"
                name=""
                id=""
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button style={{ cursor: 'pointer' }} onClick={handleClick}>
                Add
            </button>
            <p>My text input is = {valueInput}</p>
        </div>
    );
};

export default TodoNew;
