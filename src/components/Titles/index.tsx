import './style.css';

interface iTitle {
    type?: string;
    classTitle?: string;
    text?: string;
    origin?: string;
}

const Titles = ({ type, classTitle, text, origin }: iTitle) => {
    if (type == 'h1')
        return (
            <h1 className={classTitle}>
                <span className="title__part--1">Nu </span>
                <span className={origin}>Kenzie</span>
            </h1>
        );

    if (type == 'h2') return <h2 className={classTitle}>{text}</h2>;

    if (type == 'h3') return <h3 className={classTitle}>{text}</h3>;

    if (type == 'h4') return <h4 className={classTitle}>{text}</h4>;

    if (type == 'h5') return <h5 className={classTitle}>{text}</h5>;
    else return <h6 className={classTitle}>{text}</h6>;
};

export default Titles;
