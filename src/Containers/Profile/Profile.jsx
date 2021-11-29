// import '../../Scss/Styles.scss'
import './Profile.css'
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';


const Profile = (props) => {

    const logOut = () => {

        props.dispatch({ type: LOGOUT });

    }

    if (props.credentials?.token !== '') {
        return (
            <div className="designMain">
                <div className="designProfile">
                    <div className="textLogin">Name:</div>
                    <div className="userDesign">{props.credentials?.user?.name}</div>
                    <div className="textLogin">Surname:</div>
                    <div className="userDesign">{props.credentials?.user?.surname}</div>
                    <div className="textLogin">Email:</div>
                    <div className="userDesign">{props.credentials?.user?.email}</div>
                    <div className="textLogin">ID:</div>
                    <div className="userDesign">{props.credentials?.user?.dni}</div>
                    <div className="textLogin">City:</div>
                    <div className="userDesign">{props.credentials?.user?.city}</div>
                    <div className="textLogin">Postal code:</div>
                    <div className="userDesign">{props.credentials?.user?.cp}</div>
                    <div className="textLogin">Phone:</div>
                    <div className="userDesign">{props.credentials?.user?.phone}</div>
                    <div className="textLogin">Address:</div>
                    <div className="userDesign">{props.credentials?.user?.address}</div>
                    <div className="profileButtons">
                        <div className="editButton" onClick={() => logOut()}>Edit profile</div>
                        <div className="logoutButton" onClick={() => logOut()}>Log out</div>
                    </div>
                </div>
            </div>
        )

    } else {
        return (
            <div className="designMain">
               <div className="designProfile">
                   No user has logged in.
               </div>
            </div>
        )
    }

};

export default connect((state) => ({
    credentials: state.credentials
}))(Profile);