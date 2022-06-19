import Todo from "./Todo"

const Todos = ({todoList}) => {
    return (
        <>
            {todoList.map(todo =>
                <Todo key={todo.id} todo={todo}/>
            )}
        </>
    )
}

export default Todos