import React from 'react';
import { iValues } from '../DashboardPage';
import Paragraph from '../Paragraph';
import Titles from '../Titles';

import './style.css';

interface iTotalValueProps {
    values: iValues[];
}

const TotalValue = ({ values }: iTotalValueProps) => {
    return (
        <div className="totalValue">
            <div>
                <h2>Valor total:</h2>
                {/* <Paragraph
                    className={'title--3 total'}
                    text={new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(
                        values.reduce((accu, curr) => accu + curr.value, 0)
                    )}
                /> */}
                <span className="title--3 total">
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(
                        values.reduce((accu, curr) => accu + curr.value, 0)
                    )}
                </span>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    );
};

export default TotalValue;
