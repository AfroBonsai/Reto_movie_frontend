import React from 'react';
import Button from '../Button/Button';
import './Header.css';


const Header = () => {

    return (
        <div className="designHeader">
            <Button route="Home" url="/"/>
            <Button route="Login" url="/login"/>
            <Button route="Register" url="/register"/>
            <Button route="Profile" url="/profile"/>
        </div>
    )

};

export default Header;