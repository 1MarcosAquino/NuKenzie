import React from 'react';
import Button from '../Button';
import Titles from '../Titles';

import './style.css';

const Header = ({ action }: { action: () => void }) => {
    return (
        <header>
            <div className="container">
                <Titles type={'h1'} origin={'title__dashboard'} />
                <Button
                    click={() => action()}
                    text="Inicio"
                    className="logout"
                />
            </div>
        </header>
    );
};

export default Header;
