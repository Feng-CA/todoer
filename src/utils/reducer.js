export const reducer = (state, action) => {
  console.log("state:", state)
  console.log("action:", action)

  switch(action.type){
    case "cleanState": {
        //reset all states to initial values
        return {
            todoList: [],
            loggedInUser: ""
        }
    }
    case "setTodoList": {
        //populate the todoList Array with the initial values
        return {
            ...state,
            todoList: action.data
        }
    }
    case "addTodo": {
        //receives a todo and adds it to the list
        return {
            ...state,
            todoList: [action.data, ...state.todoList]
        }
    }
    case "setLoggedInUser": {
        //updates the loggedInUser value
        return {
            ...state,
            loggedInUser: action.data
        }
    }
    case "setToken": {
        //updates the token value
        return {
            ...state,
            token: action.data
        }
    }
    default: return state;
  }
}