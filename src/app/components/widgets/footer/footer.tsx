import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={'mt-32 w-full bg-black min-h-16 p-8 items-center text-center grid gap-4'}>
            <div className={'w-[7rem] h-[7rem] cursor-pointer mx-auto'}>
                <div className="relative w-full h-full">
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
            <section className={'grid grid-cols-2 justify-center gap-64 xs:gap-32 xxxs:grid-cols-1 xxxs:gap-16'}>
                <div>
                    <h2 className={'responsive-48 font-extra'}>Навигация</h2>
                    <div className={'grid gap-4 '}>
                        <Link href={''}>О нас</Link>
                        <Link href={''}>Залы</Link>
                        <Link href={''}>Наши работы</Link>
                        <Link href={''}>Аппаратура</Link>
                        <Link href={''}>Наша команда</Link>
                        <Link href={''}>Прайскурант</Link>
                        <Link href={''}>Контакты</Link>
                    </div>
                </div>
                <div>
                    <h2 className={'responsive-48 font-extra'}>Информация</h2>
                    <div className={'grid gap-4'}>
                        <Link href={''}>Для инвесторов</Link>
                        <Link href={''}>Для сотрудников</Link>
                        <Link href={''}>Для клиентов</Link>
                    </div>
                </div>
            </section>
            <div>
                <p>
                    HAPPY - PHOTOSTUDIO 2024
                </p>
            </div>
        </footer>
    );
};

export default Footer;