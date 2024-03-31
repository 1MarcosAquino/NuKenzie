import './style.css';

const Logo = ({ origin }: { origin: string }) => {
    return (
        <h1 className="logo">
            <span>Nu </span>
            <span className={`${origin}-logo_color`}>Kenzie</span>
        </h1>
    );
};

export default Logo;
