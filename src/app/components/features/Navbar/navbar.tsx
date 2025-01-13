"use client"
import React, {useEffect, useState} from 'react';
import {BtnNavbar} from "@/app/components/features";
import Image from "next/image";
import {BtnLine, BtnLineStyle, BtnMain} from "@/app/components/shared";
export const data = [
    {
        href: "about",
        text: "О нас"
    }
]
const Navbar = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
        } else {
            document.body.style.overflow = ''; // Включаем прокрутку страницы обратно
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);
    return (
        <header className={'py-2 fixed w-full z-50 bg-Red1 bg-opacity-50 backdrop-blur-sm'}>
            <div className={'gridSetka'}>
                <nav className={'flex justify-between w-full'}>
                    <div className={'w-[2.5rem] cursor-pointer'}>
                        <div className="relative w-full h-full aspect-square">
                            <Image
                                src={'/happyS.webp'}
                                alt={''}
                                fill
                                className="z-40 object-cover rounded-full"
                                loading="lazy"
                                quality={100}
                            />
                        </div>
                    </div>
                    <div>
                        <BtnNavbar text={'MENU'} setOpen={setOpen}/>
                        <div className={`h-screen bg-black bg-opacity-60 absolute top-0 z-50 ${open ? 'left-0 w-screen' : '-left-full w-0'}`}
                        onClick={() => {
                            setOpen(false)
                        }}>
                            <div onClick={e => e.stopPropagation()}
                            className={'w-1/2 bg-Red1 h-screen p-16 xs:p-8 xxxs:p-2 xxxs:py-8'}>
                                <div className={'grid gap-8 xxxs:gap-2'}>
                                    <h1 className={'text-left responsive-128 tracking-large border-white border-b-2 xs:tracking-medium xxxs:tracking-small'}>
                                        СЧАСТЬЕ
                                    </h1>
                                    <h2 className={'responsive-32 font-serif'}>Навигация:</h2>
                                    <div className={'grid gap-4 border-white border-b-2 py-4'}>
                                        <BtnLine href={'#contacts'}>
                                            <BtnMain text={'О нас'}/>
                                        </BtnLine>
                                        <BtnLine href={'#rooms'}>
                                            <BtnMain text={'Наши залы'}/>
                                        </BtnLine>
                                        <BtnLine href={'#works'}>
                                            <BtnMain text={'Наши работы'}/>
                                        </BtnLine>
                                        <BtnLine href={'#apparat'}>
                                            <BtnMain text={'Аппаратура'}/>
                                        </BtnLine>
                                        <BtnLine href={'#team'}>
                                            <BtnMain text={'Наша команда'}/>
                                        </BtnLine>
                                    </div>
                                    <h2 className={'responsive-32 font-serif'}>Социальные сети:</h2>
                                    <div className={'flex gap-8 flex-wrap xxxs:gap-2'}>
                                        <BtnLine href={''}>
                                            <BtnLineStyle text={'Instagram'}/>
                                        </BtnLine>
                                        <BtnLine href={''}>
                                            <BtnLineStyle text={'Facebook'}/>
                                        </BtnLine>
                                        <BtnLine href={''}>
                                            <BtnLineStyle text={'YouTube'}/>
                                        </BtnLine>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;