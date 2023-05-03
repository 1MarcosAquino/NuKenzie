import React from 'react';
import './style.css';

const Paragraph = ({ className, text }) => {
    return <p className={className}>{text}</p>;
};

export default Paragraph;
