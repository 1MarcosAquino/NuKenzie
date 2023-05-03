import React from 'react';
import Button from '../Button';
import Paragraph from '../Paragraph';
import Titles from '../Titles';

import './style.css';
const FinancialSummary = ({ values, setValues }) => {
    function deleteElement(idElement) {
        setValues(values.filter((obj) => obj.id !== idElement));
    }

    return values.map((ele) => {
        const { id, description, value, valueType } = ele;

        return (
            <div key={id} className="summary">
                <div>
                    <Titles type={'h2'} text={description} />
                    <Paragraph text={valueType} />
                </div>

                <div>
                    <Paragraph
                        text={new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(value)}
                    />
                    <Button
                        onClick={() => deleteElement(id)}
                        classBtn={'button__image'}
                    />
                </div>
            </div>
        );
    });
};

export default FinancialSummary;
