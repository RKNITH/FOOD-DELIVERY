import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../context/toContext';
import axios from 'axios'


const Login = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext)


    const [currentState, setCurrentState] = useState("Sign Up");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currentState === "Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false)

        }
        else {
            alert(response.data.message)
        }

    }



    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className='login-popup-container' >
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='cross' />
                </div>
                <div className='login-popup-inputs'>
                    {currentState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}

                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your eamil' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required />
                    <p> By continuing, i agree to the terms of use and privacy policy.</p>

                </div>
                {currentState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click Me</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Lgin here</span></p>}


            </form>
        </div>
    )
}

export default Login