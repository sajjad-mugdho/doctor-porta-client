import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <button
         className="btn btn-primary text-white bg-gradient-to-r to-secondary from-primary ">
            {children}
         </button>
    );
};

export default PrimaryBtn;