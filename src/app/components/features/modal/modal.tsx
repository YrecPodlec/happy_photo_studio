'use client'
import React, {useEffect, useState} from 'react';
import {BtnModal, ModalWindow} from "@/app/components/shared";
interface Props {
    children: React.ReactNode;
    childrenBtn: React.ReactNode;
    hover: React.ReactNode;
    className: string;
    param1: string;
    param2: string;
}
const Modal = ({ children, childrenBtn, hover, className, param1, param2 }: Props) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
        } else {
            document.body.style.overflow = ''; // Включаем прокрутку страницы обратно
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [active]);
    return (
        <>
            <BtnModal setActive={setActive} childrenBtn={childrenBtn} hover={hover} className={className}/>
            <ModalWindow active={active} setActive={setActive} param1={param1} param2={param2}>
                {children}
            </ModalWindow>
        </>
    );
};

export default Modal;