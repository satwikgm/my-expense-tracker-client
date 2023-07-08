import axios from 'axios';
import React , {useState} from 'react'
import { Link } from 'react-router-dom';

const SignupPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/signup',{
                username,password
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <label>Set Username</label> <br />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>Set Password</label> <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="button" onClick={handleSignup}>Submit</button>
            <br />
            <br />
            <Link to="/login">Login</Link>
        </div>
    )
}

export default SignupPage
