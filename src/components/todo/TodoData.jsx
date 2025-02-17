const TodoData = (props) => {
    const { todoList, removeElement } = props;

    const handleClick = (id) => {
        removeElement(id);
    };

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button style={{ cursor: 'pointer' }} onClick={() => handleClick(item.id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoData;
