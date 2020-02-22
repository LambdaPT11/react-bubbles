import React from 'react';
import axiosWithAuth from './utilis/axiosWithAuth';


const Login = () => {


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
    )
}

export default Login;


