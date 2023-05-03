import React from 'react';

const Button = ({ htmlFor, text }) => {
    return <label htmlFor={htmlFor}>{text}</label>;
};

export default Button;
