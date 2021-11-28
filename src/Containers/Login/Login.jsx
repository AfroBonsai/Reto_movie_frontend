// import '../../Scss/Styles.scss';
import './Login.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';


const Login = (props) => {

    const navigate = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ email: '', password: '' });


    //Handler
    const inputHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const logMe = async () => {

        let body = {
            email: credentials.email,
            password: credentials.password
        };

        try {

            let res = await axios.post("https://notflix-database.herokuapp.com/user/login", body);
            // setmsgError(`Welcome ${res.data.user.name}!`);

            // Save data in REDUX
            let dat = res.data;

            props.dispatch({ type: LOGIN, payload: dat });

            setTimeout(() => {
                navigate("/profile");
            }, 1000);

        } catch (error) {
            setmsgError("LogIn error.");

        }
    }

    return (

        <div className="designMain">


            <div className="designLogin">
                <div className="textLogin">Email:</div>
                <input className="designInput" type='email' name='email' title='email' onChange={inputHandler} lenght='30' />
                <div className="textLogin">Password:</div>
                <input className="designInput" type='password' name='password' title='password' onChange={inputHandler} lenght='30' />
                <div className="loginButton" onClick={() => logMe()}>Login</div>
                <div className="error">{msgError}</div>
            </div>
        </div>
    )

};

export default connect()(Login);

