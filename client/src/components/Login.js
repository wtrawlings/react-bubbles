import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const submitHandler = (event) => {
    console.log(username, password)
    event.preventDefault();
    setIsLoading(true);
    axios.post('http://localhost:5000/api/login', { username, password })
    .then((res) => {
        //console.log(res);//maybe res.payload with no data
        localStorage.setItem('token', res.data.payload);
        
    })
    .catch((error) => {
        console.log(error.message);
    });
    //reset values to blank once submitted
    setUsername('');
    setPassword('');
    setIsLoading(false);
    props.history.push("/bubblepage")
}

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
        <div>
            <h2>{isLoading ? "Loading" : "LOGIN"}</h2>
            <form onSubmit={submitHandler}>
              <input type="text" name='username' placeholder="username" onChange={e => setUsername(e.target.value)} />
              <input type="password" name='password' placeholder="password" onChange={e => setPassword(e.target.value)}/>
              <input type="submit" value="submit" />  
            </form>
        </div>
    </div>
  );
};

export default Login;
