import React from 'react';
import Button from '../Button';
import Paragraph from '../Paragraph';
import Titles from '../Titles';

import './style.css';
const FinancialSummary = ({ values, setValues }) => {
    function deleteElement(idElement) {
        setValues(values.filter((obj) => obj.id !== idElement));
    }

    const { format } = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2,
    });

    return values.map((ele) => {
        const { id, description, value, valueType } = ele;

        return (
            <div key={id} className="summary">
                <div>
                    <Titles type={'h2'} text={description} />
                    <Paragraph text={valueType} />
                </div>

                <div>
                    <Paragraph text={format(value)} />
                    <Button
                        click={() => deleteElement(id)}
                        className="button__image"
                    />
                </div>
            </div>
        );
    });
};

export default FinancialSummary;
