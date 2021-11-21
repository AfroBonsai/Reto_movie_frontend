import '../../Scss/Styles.scss';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
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

    const enviaDatosRegistro = async () => {
        //Comprobación de errores en los datos

        if (! /[a-z]/gi.test(user.name) ) {
           setmsgError("Nombre Incorrecto");
           return;
        };
        
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email) ) {
           setmsgError("Email Incorrecto");
           return;
        };

        //Generación del body
        let body = {
            city: user.city,
            name: user.name,
            surname: user.surname,
            dni: user.dni,
            password: user.password,
            email: user.email,
            cp: user.cp,
            address: user.address,
            phone: user.phone,
            superUser: false
            // password2: user.password2,
        }

        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....",body);
                
        try {
            let res = await axios.post("https://notflix-database.herokuapp.com/user/register", body);
            //Guardado de datos en localStorage
            
        } catch (error) {
            console.log(error)
        }
        

        setmsgError("Usuario registrado con éxito");
        
        setTimeout(()=>{
            navigate("/");
        },4000);
    };


    //Renderizado
    return (
        <div className="designMain">
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <input type='text' name='name' title='name' onChange={userHandler} lenght='30' placeholder='Name' />
            <input type='text' name='surname' title='surname' onChange={userHandler} lenght='30' placeholder='Surname' />
            <input type='text' name='dni' title='dni' onChange={userHandler} lenght='10' placeholder='ID' />
            <input type='email' name='email' title='email' onChange={userHandler} lenght='30' placeholder='Email' />
            <input type='text' name='address' title='address' onChange={userHandler} lenght='30' placeholder='Address' />
            <input type='text' name='city' title='city' onChange={userHandler} lenght='30' placeholder='City' />
            <input type='number' name='cp' title='cp' onChange={userHandler} lenght='5' placeholder='Postal Code' />
            <input type='text' name='password' title='password' onChange={userHandler} lenght='30' placeholder='Password' />
            {/* <input type='text' name='password2' title='password2' onChange={userHandler} lenght='30' placeholder='Repite Password' /> */}
            <input type='text' name='phone' title='phone' onChange={userHandler} lenght='20' placeholder='Phone Number' />
            <div className="botonSend" onClick={() => enviaDatosRegistro()}>Register</div>
            <div>{msgError}</div>
        </div>
    )
};

export default Register;