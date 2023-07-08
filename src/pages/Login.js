import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
        await axios.post('http://localhost:5000/login',{
            username,password
        })
        .then(res => {
            if(res.data.message === "correct") {
                history("/landing")
            } else if(res.data.message === "InvalidPassword") {
                history("/error")
            }
        })
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <label>Username</label> <br />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>Password</label> <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="button" onClick={handleLogin}>Submit</button>
            <br />
            <br />
            <Link to="/signup">Signup</Link>
        </div>
    );
};

export default Login;
