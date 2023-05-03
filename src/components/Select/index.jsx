import React from 'react';
import Option from '../Option';
import './style.css';

const Select = ({ name, ...rest }) => {
    return (
        <select name={name} id={name} {...rest}>
            <Option name="Entrada" />
            <Option name="Saída" />
        </select>
    );
};

export default Select;
