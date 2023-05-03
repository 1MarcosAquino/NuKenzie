import React from 'react';
import './style.css';

const Input = ({ name, type, placeholder, ...rest }) => {
    return (
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            {...rest}
        />
    );
};

export default Input;
