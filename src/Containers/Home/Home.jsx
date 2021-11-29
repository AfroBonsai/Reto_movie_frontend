import '../../Scss/Styles.scss';
// import './Home.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="designMain">

            <div className="designHome">
                <div className="titleHome">
                    <p> Welcome to Notflix. </p>
                    <p> You need to Log In or Register to access our services. </p>
                     </div>
                <div className="homeButtons">
                    <div className="homeButton" onClick={() => navigate("/login")}>Log In</div>
                    <div className="homeButton" onClick={() => navigate("/register")}>Register</div>
                </div>
            </div>
        </div>
    )

};

export default Home;