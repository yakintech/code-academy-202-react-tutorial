import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login';

function Auth({children}) {

    let loginControl = localStorage.getItem('isLogin')

    let navigate = useNavigate();

    if(loginControl === 'true')
    {
        return children
    }
    else
    {
        return <Login/>
    }

}

export default Auth