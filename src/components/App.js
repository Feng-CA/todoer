import React, { useEffect, useReducer, useState } from 'react'
import LoginForm from './LoginForm'
import Navigation from './Navigation'
import TodoForm from './TodoForm'
import Todos from './Todos'
import TodoDetail from './TodoDetail'
import initialTodoList from '../data/todo-list.json'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'
import { reducer } from '../utils/reducer'

const App = () => {
  const initialState = {
    todoList: [],
    loggedInUser: ""
  }

  const [store, dispatch] = useReducer(reducer, initialState)
  const {todoList, loggedInUser} = store

  // const [loggedInUser, setLoggedInUser] = useState("");
  // const [todoList, setTodoList] = useState([]);

  const activateUser = (username) => {
    // setLoggedInUser(username)
    dispatch({
      type: "setLoggedInUser",
      data: username
    })
  }

  const addTodo = (text) => {
    const todo = {
      text: text,
      user: loggedInUser,
      id: todoList[0].id + 1 //nextId(todoList)
    }
    // setTodoList(
    //   (todoList) => [todo, ...todoList]
    // )
    dispatch({
      type: "addTodo",
      data: todo
    })
  }

  // function nextId(data) {
  //   if(data.length === 0) return 1;

  //   const sortData = data.sort((a, b) => a.id - b.id);
  //   const nextId = sortData[sortData.length - 1].id + 1;
  //   return nextId
  // }

  useEffect(
    ()=>{
      // setTodoList(initialTodoList)
      dispatch({
        type: "setTodoList",
        data: initialTodoList
      })
    },
    []
  )


  return (
    <div >
          <h1>Todoer</h1>
          {/* {!loggedInUser ?
             <LoginForm activateUser={activateUser}/>
             :
             <TodoForm loggedInUser={loggedInUser} addTodo={addTodo}/>
            }
          <Todos todoList={todoList}/> */}

          <Router>
            <Navigation loggedInUser={loggedInUser} activateUser={activateUser}/>
            <Routes>
              <Route path="/" element={<Navigate to="todos" replace/>} />
              <Route path="todos">
                <Route index element={<Todos todoList={todoList}/>} />
                <Route path="new" element={
                  loggedInUser ?
                    <TodoForm loggedInUser={loggedInUser} addTodo={addTodo}/>
                  :
                    <Navigate to="/login" />
                } />
                <Route path=":todoId" element={<TodoDetail todoList={todoList}/>} />
              </Route>
              <Route path="about" element={<About />} />
              <Route path="login" element={<LoginForm activateUser={activateUser}/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
    </div>
  )
}

export default App
