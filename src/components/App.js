import React, { useEffect, useReducer} from 'react'
import LoginForm from './LoginForm'
import Navigation from './Navigation'
import TodoForm from './TodoForm'
import Todos from './Todos'
import TodoDetail from './TodoDetail'
import SignupForm from './SignupForm'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'
import { reducer } from '../utils/reducer'
import { StateContext } from '../utils/stateContext'
import { getTodos } from '../services/todosServices'

const App = () => {
  const initialState = {
    todoList: [],
    loggedInUser: sessionStorage.getItem("username") || null,
    token: sessionStorage.getItem("token") || null
  }

  const [store, dispatch] = useReducer(reducer, initialState)
  const {loggedInUser} = store

  useEffect(
    ()=>{
      // fetch("http://localhost:4000/todos")
      // .then(response => response.json())
      // .then(data => console.log(data))
    //   axios.get("http://localhost:4000/todos")
    //   .then(response => {console.log(response.data)
    //   dispatch({
    //     type: "setTodoList",
    //     data: response.data
    //   })
    // })
      getTodos()
      .then(todos => {
        dispatch({
          type: "setTodoList",
          data: todos
        })
      })
      .catch(e => {console.log(e)})
      // setTodoList(initialTodoList)
    },
    []
  )


  return (
    <div >
          {/* <Typography variant='h3'>Todoer</Typography>           */}
          {/* Wrap all the components that use global states like loggedInUser and todoList in the state context provider */}
          <StateContext.Provider value={{store, dispatch}}>
            {/* Wrap all the components involved in the App's routing */}
            <Router>
              <Navigation />
              <Routes>
                <Route path="/" element={<Navigate to="todos" replace/>} />
                <Route path="todos">
                  <Route index element={<Todos />} />
                  <Route path="new" element={
                    loggedInUser ?
                      <TodoForm />
                    :
                      <Navigate to="/login" />
                  } />
                  <Route path=":todoId" element={<TodoDetail />} />
                </Route>
                <Route path="about" element={<About />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="signup" element={<SignupForm />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </StateContext.Provider>
    </div>
  )
}

export default App
