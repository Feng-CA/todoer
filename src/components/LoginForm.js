import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/authServices";
import { useGlobalState } from "../utils/stateContext";

const LoginForm = () => {
  const { dispatch } = useGlobalState();
  const navigate = useNavigate();

  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("You clicked submit");
    // console.log(formData);
    // activateUser(formData.user)
    signIn(formData)
      .then(({ username, jwt }) => {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("token", jwt);
        dispatch({
          type: "setLoggedInUser",
          data: username,
        });
        dispatch({
          type: "setToken",
          data: jwt,
        });
      })
      .catch((e) => console.log(e));

    setFormData(initialFormData);
    navigate("/todos");
  };

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <Typography variant="h4">Log in user</Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <InputLabel>Email:</InputLabel>
          <TextField
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleFormData}
          />
        </div>
        <div>
          <InputLabel htmlFor="password">Password:</InputLabel>
          <TextField
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleFormData}
          />
        </div>
        {/* <input type="submit" value="Login"/> */}
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
