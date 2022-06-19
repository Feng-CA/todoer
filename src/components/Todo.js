const Todo = ({todo}) => {
    return (
        <>
            <h4>{todo.text}</h4>
            <p>{todo.user}</p>
     
        </>
    )
}

export default Todo