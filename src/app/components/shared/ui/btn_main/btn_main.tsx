import React from 'react';
interface Props {
    text: string;
}
const BtnMain = ({text}: Props) => {
    return (
        <div className={'bg-black hover:px-16 p-4 border-gradientEnd border-2 responsive-32 xxxs:p-2'}>
                {text}
        </div>
    );
};

export default BtnMain;