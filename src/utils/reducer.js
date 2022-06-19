export const reducer = (state, action) => {
  console.log(state)
  console.log(action)

  switch(action.type){
    case "cleanState": {
        return {
            todoList: [],
            loggedInUser: ""
        }
    }
    case "setTodoList": {
        return {
            ...state,
            todoList: action.data
        }
    }
    case "addTodo": {
        return {
            ...state,
            todoList: [action.data, ...state.todoList]
        }
    }
    case "setLoggedInUser": {
        return {
            ...state,
            loggedInUser: action.data
        }
    }
    default: return state;
  }
}