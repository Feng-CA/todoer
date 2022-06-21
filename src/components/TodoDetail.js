import { Card, CardContent, Typography } from "@mui/material"
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
        <Card>
          <CardContent>
              <Typography variant='h5'>{todo.text}</Typography>
              <Typography variant='p'>{todo.user}</Typography>
          </CardContent>
        </Card>
      ) : (
        <>
            <Typography variant='h5'>Todo not found</Typography>
            <Link to="/todos">Go back to the main page</Link>
        </>
      )}
    </>
  );
};

export default TodoDetail;
