// import '../../Scss/Styles.scss';
import './Register.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    let navigate = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [user, setUser] = useState({
        name: '',
        surname: '',
        dni: '',
        email: '',
        address: '',
        city: '',
        cp: 0,
        password: '',
        password2: '',
        phone: ''
    });

    //Manejadores o Handlers

    const userHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    //useEffect

    useEffect(() => {
        //UseEffect que se ejecuta sólo una vez al montarse. (1a vez).

    }, []);

    useEffect(() => {
        //UseEffect que se ejecutará CADA VEZ que se actualize el estado.(renderizando de nuevo).
    });

    //Funciones

    const sendRegisterData = async () => {
        //Comprobación de errores en los datos

        if (! /[a-z]/gi.test(user.name)) {
            setmsgError("Nombre Incorrecto");
            return;
        };

        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email)) {
            setmsgError("Email Incorrecto");
            return;
        };

        // Body will be sent to backend

        let body = {
            name: user.name,
            surname: user.surname,
            email: user.email,
            dni: user.dni,
            phone: user.phone,
            city: user.city,
            cp: user.cp,
            address: user.address,
            password: user.password,
            superUser: false
        }

        try {
            let res = await axios.post("https://notflix-database.herokuapp.com/user/register", body);

        } catch (error) {
            console.log(error)
        }
        setmsgError("User succesfully registered");

        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };


    //Renderizado
    return (
        <div className="designMain">
            <div className="designProfile">
                {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
                <input className="registerFields" type='text' name='name' title='name' onChange={userHandler} lenght='30' placeholder='Name' />
                <input className="registerFields" type='text' name='surname' title='surname' onChange={userHandler} lenght='30' placeholder='Surname' />
                <input className="registerFields" type='email' name='email' title='email' onChange={userHandler} lenght='30' placeholder='Email' />
                <input className="registerFields" type='text' name='dni' title='dni' onChange={userHandler} lenght='10' placeholder='ID' />
                <input className="registerFields" type='text' name='phone' title='phone' onChange={userHandler} lenght='20' placeholder='Phone Number' />
                <input className="registerFields" type='text' name='city' title='city' onChange={userHandler} lenght='30' placeholder='City' />
                <input className="registerFields" type='number' name='cp' title='cp' onChange={userHandler} lenght='5' placeholder='Postal Code' />
                <input className="registerFields" type='text' name='address' title='address' onChange={userHandler} lenght='30' placeholder='Address' />
                <input className="registerFields" type='password' name='password' title='password' onChange={userHandler} lenght='30' placeholder='Password' />
                <input className="registerFields" type='password' name='password2' title='password2' onChange={userHandler} lenght='30' placeholder='Repeat password' />
                <div className="registerButton" onClick={() => sendRegisterData()}>Register</div>
                <div>{msgError}</div>
            </div>
        </div>
    )
};

export default Register;