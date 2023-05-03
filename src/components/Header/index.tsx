import React from 'react';
import Button from '../Button';
import Titles from '../Titles';

import './style.css';

interface iHeaderProps {
    setHome: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setHome }: iHeaderProps) => {
    return (
        <header>
            <div className="container">
                <Titles type={'h1'} origin={'title__dashboard'} />
                <Button
                    onClick={() => {
                        setHome(true);
                    }}
                    string={'Inicio'}
                    classBtn={'logout'}
                />
            </div>
        </header>
    );
};

export default Header;
