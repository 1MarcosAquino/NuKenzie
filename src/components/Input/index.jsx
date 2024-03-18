import './style.css';

const Input = ({ name, type, placeholder, label, ...rest }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={'Digite ' + placeholder}
                {...rest}
            />
        </>
    );
};

export default Input;
