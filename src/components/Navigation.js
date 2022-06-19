import { Link, useNavigate } from "react-router-dom";

const Navigation = ({loggedInUser, activateUser}) => {

    const navigate = useNavigate()
    const logout = (e) => {
        e.preventDefault();
        activateUser("")
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