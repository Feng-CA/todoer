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

  const addTodo = (text) => {
    const todo = {
      text: text,
      user: loggedInUser,
      id: todoList[todoList.length - 1].id + 1
    }
    setTodoList(
      (todoList) => [todo, ...todoList]
    )
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
          {!loggedInUser ?
             <LoginForm activateUser={activateUser}/>
             :
             <TodoForm loggedInUser={loggedInUser} addTodo={addTodo}/>
          }
          <Todos todoList={todoList}/>
    </div>
  )
}

export default App
