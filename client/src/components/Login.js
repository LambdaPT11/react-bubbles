import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div>
            <form>
                <input
                    type="text"
                    placeholder="User Name"
                    className="input" />
                <input
                    type="password"
                    placeholder="Password"
                    className="input" />
                <button>Log In</button>
            </form>
        </div>
  );
};

export default Login;
