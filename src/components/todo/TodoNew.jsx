const TodoNew = (props) => {
    console.log('>> check point: ', props);

    const { addNewTodo } = props;

    // addNewTodo("huuthang");
    return (
        <div className="todo-new">
            <input type="text" name="" id="" />
            <button>Add</button>
        </div>
    );
};

export default TodoNew;
