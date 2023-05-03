import React from 'react';
import './style.css';

interface iButtonProps {
    string: string;
    classBtn: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ string, classBtn, onClick }: iButtonProps) => {
    return (
        <button className={classBtn} onClick={onClick}>
            {string}
        </button>
    );
};

export default Button;
