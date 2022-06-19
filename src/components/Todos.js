import { useGlobalState } from "../utils/stateContext"
import Todo from "./Todo"

const Todos = () => {
    const {store} = useGlobalState()
    const {todoList} = store
    return (
        <>
            {todoList.map(todo =>
                <Todo key={todo.id} todo={todo}/>
            )}
        </>
    )
}

export default Todos