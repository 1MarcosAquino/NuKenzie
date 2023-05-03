import React from 'react';

const SubTitle = ({ className_1, className_2, text_1, text_2 }) => {
    return (
        <>
            <h2 className={className_1}>{text_1}</h2>
            <h3 className={className_2}>{text_2}</h3>
        </>
    );
};

export default SubTitle;
