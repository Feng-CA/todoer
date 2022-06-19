import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import Navigation from './Navigation'
import TodoForm from './TodoForm'
import Todos from './Todos'
import initialTodoList from '../data/todo-list.json'

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [todoList, setTodoList] = useState([]);

  const activateUser = (username) => {
    setLoggedInUser(username)
  }

  useEffect(
    ()=>{
      setTodoList(initialTodoList)
    },
    []
  )
  return (
    <div >
          <h1>Todoer</h1>
          <Navigation loggedInUser={loggedInUser} activateUser={activateUser}/>
          {!loggedInUser && <LoginForm activateUser={activateUser}/>}
          <TodoForm loggedInUser={loggedInUser}/>
          <Todos todoList={todoList}/>
    </div>
  )
}

export default App
