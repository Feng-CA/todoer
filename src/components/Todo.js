import { Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Todo = ({todo}) => {
    return (
        <Link to={`${todo.id}`} style={{textDecoration: 'none'}}>
            <Card>
                <CardContent>
                    <Typography variant='h5'>{todo.text}</Typography>
                    <Typography variant='p'>{todo.user}</Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default Todo