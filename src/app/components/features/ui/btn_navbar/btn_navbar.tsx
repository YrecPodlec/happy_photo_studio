import React from 'react';
interface Props {
    text: string;
    setOpen: (active: boolean) => void;
}
const BtnNavbar = ({text, setOpen}: Props) => {
    return (
        <button className={'border-gradientEnd border-2 px-4 py-2 hover:px-8 xxxs:py-1'} onClick={() => setOpen(true)}>
            {text}
        </button>
    );
};

export default BtnNavbar;