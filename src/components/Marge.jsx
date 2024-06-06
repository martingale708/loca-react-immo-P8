import React from 'react';
import "../styles/marge.css"

const Marge = ({children}) => {
    return (
        <div className='marge'>
            {children}
        </div>
    );
};

export default Marge;