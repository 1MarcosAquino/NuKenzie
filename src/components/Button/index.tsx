import './style.css';

interface iButtonProps {
    text: string;
    className: string;
    click: () => void;
}

const Button = ({ text, className, click }: iButtonProps) => {
    return (
        <button className={className} onClick={() => click()} children={text} />
    );
};

export default Button;
