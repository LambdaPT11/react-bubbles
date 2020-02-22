import React from "react";
import axiosWithAuth from './utilis/axiosWithAuth';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const userHandler = (e) => {
    setUser(e.target.value)
  };
  
  const passHandler = (e) => {
    setPass(e.target.value)
  };

  const login = (e) => {
    e.preventDefault = {
      username: user,
      password: pass
    }
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubble-page')
      })
      .catch(err => console.error('axios:', err))
  }
  
  return (
    <div>
            <form onSubmit={login} className="form">
                <input
                    type="text"
                    placeholder="User Name"
                    className="input"
                    value={user}
                    onChange={userHandler} />
                <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={pass}
                    onChange={passHandler} />
                <button className="button">Log In</button>
            </form>
        </div>
  );
};

export default Login;
