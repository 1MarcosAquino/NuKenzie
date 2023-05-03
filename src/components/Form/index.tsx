import React, { useState } from 'react';
import Button from '../Button';
import { iValues } from '../DashboardPage';
import Input from '../Input';
import Label from '../Label';
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
        if (valueType == 'Saída')
            setValues([
                ...values,
                {
                    id: Math.random(),
                    description,
                    value: value * -1,
                    valueType,
                },
            ]);
        else
            setValues([
                ...values,
                {
                    id: Math.random(),
                    description,
                    value: value * 1,
                    valueType,
                },
            ]);
    }

    return (
        <div className="form">
            <Label text={'Descrição'} htmlFor={'description'} />
            <Input
                onChange={(e) => setDescription(e.target.value)}
                name={'description'}
                type={'text'}
                placeholder={'Digite aqui sua descrição'}
            />
            <Paragraph className={'exemple'} text="Ex: Compra de roupas" />
            <div>
                <div>
                    <Label text={'valor'} htmlFor={'value'} />
                    <Input
                        onChange={(e) => setValue(e.target.value)}
                        name={'value'}
                        type={'number'}
                        placeholder={'1'}
                    />
                    <Paragraph className={'moeda'} text="R$" />
                </div>
                <div>
                    <Label text={'Tipo de valor'} htmlFor={'valueType'} />
                    <Select
                        onChange={(e) => setValueType(e.target.value)}
                        name={'valueType'}
                    />
                </div>
            </div>
            <Button
                onClick={renderValues}
                string="Inserir valor"
                classBtn="button"
            />
        </div>
    );
};

export default Form;
