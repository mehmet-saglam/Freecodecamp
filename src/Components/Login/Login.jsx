import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"


import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'


const Login = () => {
     let navigate = useNavigate();
     const [name, setName] = useState('')
     const [password, setPassword] = useState('')

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className="inputs">
                <div className='input'>
                    <img src={user_icon} alt=""></img>
                    <input type="text" 
                    placeholder='Username'  
                    name="text"
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='input'>
                    <img src={password_icon} alt=""></img>
                    <input type="password" 
                        placeholder='Password' 
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                </div>
            </div> 
            <div className='submit-container'>
                <button className='submit'  
                onClick={() => {                 
                    if(password === "123456") {  navigate("/counter", {state: {name:name}}) }                     
                  }}
                >
                    Log in
                </button>
            </div>
        </div>
        
    )
}

export default Login