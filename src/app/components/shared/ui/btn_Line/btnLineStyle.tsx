import React from 'react';

const BtnLineStyle = ({text}: {text: string}) => {
    return (
        <div className="border-b-2 border-white hover:px-8 cursor-pointer font-extra responsive-32 xxxs:hover:px-2">
            {text}
        </div>
    );
};

export default BtnLineStyle;