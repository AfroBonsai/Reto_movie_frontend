import './Login.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ email: '', password: '' });


    //Handler o manejador
    const manejadorInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const logMe = async () => {

        let body = {
            email: credentials.email,
            password: credentials.password
        };

        try {

            let res = await axios.post("https://notflix-database.herokuapp.com/user/login", body);
            setmsgError(`Welcome ${res.data.user.name}!`);

            localStorage.setItem("LogInData", JSON.stringify(res.data.user));
            console.log(res.data);

            setTimeout(() => {
                navigate("/profile");
            }, 2000);
        } catch (error) {
            setmsgError("LogIn error.");

        }
    }

    return (

        <div className="designLogin">


            <div className="botonesLogin">
                {/* {<pre>{JSON.stringify(credentials, null, 2)}</pre>} */}
                <input type='email' name='email' title='email' onChange={manejadorInputs} lenght='30' />
                <input type='password' name='password' title='password' onChange={manejadorInputs} lenght='30' />
                <div className="sendButton" onClick={() => logMe()}>Login</div>
                <div className="error">{msgError}</div>
            </div>
        </div>
    )

};

export default Login;

