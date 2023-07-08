import React from 'react'
import { Link } from 'react-router-dom'

const IncorrectPassword = () => {
    return (
        <div>
            Invalid Credentials
            <br />
            <br />
            <Link to="/login">Login</Link>
        </div>
    )
}

export default IncorrectPassword
