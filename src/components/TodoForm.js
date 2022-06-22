import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"
import { createTodo } from "../services/todosServices"

const TodoForm = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store
    const navigate = useNavigate()

    const initialFormData = {
        "text": ""
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.text === ""){
            console.log("empty text")
        }else {
            console.log("You clicked new todo submit")
            console.log(loggedInUser)
            console.log(formData)
            addTodo(formData)
            cleanText()
            navigate("/todos")
        }
    }
    
    const cleanText = () => {
        setFormData(initialFormData)
    }

    const addTodo = (data) => {
      
        createTodo(data)
        .then(todo => {
            dispatch({
              type: "addTodo",
              data: todo
            })
        })
    }

    return (
        <>
            <p></p>
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea type="text" name="text" id="text" placeholder={`What's your next todo ${loggedInUser}?`} value={formData.text} onChange={handleFormData}></textarea>
                </div>
            
                <Button variant="contained" type="submit">Post todo</Button>
                <Button variant="contained" onClick={cleanText}>Clean todo</Button>
            </form>
        </>
    )
}

export default TodoForm