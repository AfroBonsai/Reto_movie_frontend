import '../../Scss/Styles.scss'
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';


const Profile = (props) => {

    const logOut = () => {
        //limpio redux...por lo tanto deslogueo
        
        props.dispatch({type:LOGOUT});

    }

    if(props.credentials?.token !== ''){
        return (
            <div className="designProfile">
                <div className="user">{props.credentials?.user?.name}</div>
                <div className="user">{props.credentials?.user?.surname}</div>
                <div className="user">{props.credentials?.user?.city}</div>
                <div className="user">{props.credentials?.user?.email}</div>
                <div className="user">{props.credentials?.user?.phone}</div>
                <div className="user">{props.credentials?.user?.address}</div>
                <div className="user" onClick={()=>logOut()}>LOGOUT</div>
            </div>
        )

    } else {
        return (
            <div className="designMain">
                NADIE SABE NADA DE NINGÚN USUARIO---
            </div>
        )
    }

};

export default connect((state)=>({
    credentials: state.credentials
}))(Profile);