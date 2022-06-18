import Todo from "./Todo"

const Todos = ({todoList}) => {
    return (
        <>
            {todoList.map(todo =>
                <>
                    <p>{todo.text}</p>
                    <p>{todo.user}</p>
                </>
            )}
        </>
    )
}

export default Todos