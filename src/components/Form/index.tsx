import React, { useState } from 'react';
import Button from '../Button';
import { iValues } from '../DashboardPage';
import Input from '../Input';
import Paragraph from '../Paragraph';
import Select from '../Select';
import './style.css';

interface iFormProps {
    setValues: React.Dispatch<React.SetStateAction<iValues[]>>;
    values: iValues[];
}

const Form = ({ values, setValues }: iFormProps) => {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0);
    const [valueType, setValueType] = useState<'Entrada' | 'Saída'>('Entrada');

    function renderValues() {
        const newValue = valueType === 'Entrada' ? value * 1 : value * -1;

        setValues([
            ...values,
            {
                id: Math.random(),
                description,
                value: newValue,
                valueType,
            },
        ]);
    }

    return (
        <div className="form">
            <Input
                label="Descrição"
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                type="text"
                placeholder="Digite aqui sua descrição"
            />
            <Paragraph className={'exemple'} text="Ex: Compra de roupas" />
            <div>
                <div>
                    <Input
                        label={'valor'}
                        onChange={(e) => setValue(e.target.value)}
                        name="value"
                        type="number"
                        placeholder="1"
                    />
                    <Paragraph className={'moeda'} text="R$" />
                </div>
                <div>
                    <Select
                        label={'Tipo de valor'}
                        onChange={(e) => setValueType(e.target.value)}
                        name={'valueType'}
                    />
                </div>
            </div>
            <Button
                click={renderValues}
                text="Inserir valor"
                className="button"
            />
        </div>
    );
};

export default Form;
