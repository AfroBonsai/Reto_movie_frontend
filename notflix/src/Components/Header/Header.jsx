import React from 'react';
import Button from '../Button/Button';
import '../../Scss/Styles.scss';


const Header = () => {

    return (
        <div className="designHeader">
            <div className="designLogo">Notflix</div>
            <div className="Buttons">
                <Button route="Home" url="/" />
                <Button route="Login" url="/login" />
                <Button route="Register" url="/register" />
                <Button route="Profile" url="/profile" />
            </div>
        </div>
    )

};

export default Header;