import React from 'react';
interface Props {
    setActive: (active: boolean) => void;
    childrenBtn: React.ReactNode;
    hover: React.ReactNode;
    className: string;
}
const BtnModal = ({ setActive, childrenBtn, hover, className }: Props) => {
    return (
        <button
            onClick={() => setActive(true)}
            className={`${className} z-40`}
        >
            {childrenBtn}
            {hover}
        </button>
    );
};

export default BtnModal;