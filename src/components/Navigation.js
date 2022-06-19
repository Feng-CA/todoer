import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const Navigation = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store

    const navigate = useNavigate()
    const logout = (e) => {
        e.preventDefault();
        dispatch({
            type: "setLoggedInUser",
            data: ""
          })
        navigate("/todos")
    }

    return (
        <nav>
            <Link to="/todos">Home</Link>
            <Link to="/about">About</Link>
            { loggedInUser ?
                <>
                    <Link to="/todos/new">New todo</Link>
                    {loggedInUser}
                    <Link to="/todos" onClick={logout}>Logout</Link>
                </>
                :
                <>
                    Guest
                    <Link to="/login">Login</Link>
                    <Link to="/login">Sign Up</Link>
                </>
            }
        </nav>
    )
}

export default Navigation