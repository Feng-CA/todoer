import { Link, useParams } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const TodoDetail = () => {
  const {store} = useGlobalState();
  const {todoList} = store;

  const params = useParams();
  console.log(params);

  const getTodo = (id) => {
    return todoList.find((todo) => todo.id === parseInt(id));
  };

  const todo = getTodo(params.todoId);
  return (
    <>
      {todo ? (
        <>
          <h4>{todo.text}</h4>
          <p>{todo.user}</p>
        </>
      ) : (
        <>
            <p>Todo not found</p>
            <Link to="/todos">Go back to the main page</Link>
        </>
      )}
    </>
  );
};

export default TodoDetail;
