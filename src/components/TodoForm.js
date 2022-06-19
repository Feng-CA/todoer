import { useState } from "react"

const TodoForm = ({loggedInUser, addTodo}) => {
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
        }
    }
    
    const cleanText = () => {
        setFormData(initialFormData)
    }

    return (
        <>
            <p></p>
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea type="text" name="text" id="text" placeholder={`What's your next todo ${loggedInUser}?`} value={formData.text} onChange={handleFormData}></textarea>
                </div>
                <input type="submit" value="post"/>
                <button onClick={cleanText}>Clean text</button>
            </form>
        </>
    )
}

export default TodoForm