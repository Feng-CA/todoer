import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"

const TodoForm = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser, todoList} = store
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
            console.log(formData)
            addTodo(formData.text)
            cleanText()
            navigate("/todos")
        }
    }
    
    const cleanText = () => {
        setFormData(initialFormData)
    }

    const addTodo = (text) => {
        const todo = {
          id: todoList[0].id + 1, //nextId(todoList)
          text: text,
          user: loggedInUser
        }
        // setTodoList(
        //   (todoList) => [todo, ...todoList]
        // )
        dispatch({
          type: "addTodo",
          data: todo
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