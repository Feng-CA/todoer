import { Link } from "react-router-dom"

const Todo = ({todo}) => {
    return (
        <>
            <h4>{todo.text}</h4>
            <p>{todo.user}</p>
            <Link to={`${todo.id}`}>View detail</Link>
        </>
    )
}

export default Todo