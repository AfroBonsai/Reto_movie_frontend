import React from 'react';
import './Button.css';

import { useNavigate } from 'react-router-dom';

const Button = (props) => {

const navigate = useNavigate();

const llevame = () => {
    navigate(props.url);
}

    return (
        <div className="designButton" onClick={()=>llevame()}>{props.route}</div>
    )
};

export default Button;