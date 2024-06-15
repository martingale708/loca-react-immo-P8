import React from 'react';
import "../styles/marge.scss"

const Marge = ({children}) => {
    return (
        <div className='marge'>
            {children}
        </div>
    );
};

export default Marge;