import React from 'react';
import './style.css';

interface iButtonProps {
    text: string;
    className: string;
    click: () => void;
}

const Button = ({ text, className, click }: iButtonProps) => {
    return (
        <button className={className} onClick={() => click()}>
            {text}
        </button>
    );
};

export default Button;
