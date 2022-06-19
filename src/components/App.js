import React, { useEffect, useReducer} from 'react'
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
import { StateContext } from '../utils/stateContext'

const App = () => {
  const initialState = {
    todoList: [],
    loggedInUser: ""
  }

  const [store, dispatch] = useReducer(reducer, initialState)
  const {loggedInUser} = store

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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </StateContext.Provider>
    </div>
  )
}

export default App
