import './style.css';

const Select = ({ name, label, ...rest }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} {...rest}>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
            </select>
        </>
    );
};

export default Select;
