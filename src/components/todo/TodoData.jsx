const TodoData = (props) => {
    console.log('>> check props: ', props);
    // eslint-disable-next-line
    const { name, age, data, addNewTodo } = props;
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    );
};

export default TodoData;
