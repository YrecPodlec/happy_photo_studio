import {Location, Navbar} from "@/app/components/features";
import {BtnForm, BtnLine, BtnLineStyle, ImageRel, Input} from "@/app/components/shared";
import {SetkaFourth, SetkaSixth, Slider, SliderTeam, StudioRooms, TakeDate} from "@/app/components/widgets";
import Image from "next/image";
import React from "react";

export default function Home() {
    return (
        <>
            <Navbar/>
            <main className={'overflow-hidden grid gap-48 xs:gap-24'}>

                <section className={'gridSetka grid gap-48 xs:gap-24'}>
                    <section>
                        <section className="absolute w-full left-0 overflow-hidden flex justify-center -z-10">
                            <div className="h-[90vh] xxxs:h-[70vh] w-screen flex justify-center">
                                <div className="grid grid-cols-3 xxxs:grid-cols-1 w-screen h-full relative">
                                    {/* Левая картинка */}
                                    <div className="h-full flex justify-center xxxs:hidden">
                                        <div
                                            className="w-[306px] h-1/4 mt-16 rounded-t-my overflow-hidden outline-dashed outline-2 outline-offset-[16px] outline-white transform -translate-x-1/2">
                                            <ImageRel src="/the main section/left.jpg" alt="" text={''}/>
                                        </div>
                                    </div>

                                    {/* Центральная картинка */}
                                    <div className="h-full flex justify-center items-center">
                                        <div
                                            className="relative w-[400px] h-3/4 rounded-full overflow-hidden outline outline-2 outline-offset-[32px] xxxs:outline-offset-[8px] outline-white">
                                            <ImageRel src="/the main section/main.jpg" alt="" text={''}/>
                                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                                        </div>
                                    </div>


                                    {/* Правая картинка */}
                                    <div className="h-full flex justify-center items-center xxxs:hidden">
                                        <div
                                            className="w-3/4 h-1/2 rounded-my overflow-hidden outline-dashed outline-2 outline-offset-[16px] outline-white transform translate-x-[85%]">
                                            <ImageRel src="/the main section/right.jpg" alt="" text={''}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            className={'relative w-full h-[86vh] xxxs:h-[70vh] bg-opacity-30 top-0 left-0 cursor-default'}>
                            <div className={'h-1/2'}/>
                            <div className={'flex w-full h-1/2] xxxs:flex-col xxxs:text-center xxxs:gap-4'}>
                                <div className={'w-1/2 font-title tracking-large xxxs:w-full'}>
                                    <h1 className={'responsive-128 text-left'}>СЧАСТЬЕ</h1>
                                    <p className={'responsive-32 tracking-medium xxxs:tracking-small'}>ПРОФЕССИОНАЛЬНАЯ
                                        ФОТОСТУДИЯ</p>
                                </div>
                                <div className={'w-1/2 xxxs:w-full'}>
                                    <p className={'responsive-48'}>
                                        Мы сохраняем вашу красоту навсегда, акцентируя внимание на каждом сияющем
                                        моменте
                                        жизни
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className={'z-50'}>
                            <div className={'grid grid-cols-3 items-center'}>
                                <div className="flex justify-start">
                                    <BtnLine href={'#rooms'}>
                                        <BtnLineStyle text={'Наши залы'}/>
                                    </BtnLine>
                                </div>
                                <div className="flex justify-center h-fit">
                                    <TakeDate/>
                                </div>
                                <div className="flex justify-end">
                                    <BtnLine href={'#price'}>
                                        <BtnLineStyle text={'Прайскурант'}/>
                                    </BtnLine>
                                </div>
                            </div>
                        </section>
                    </section>
                    {/*second*/}
                    <section className={'grid gap-16'}>
                        <h1>Узнайте о нас</h1>
                        <div className={'grid justify-between gap-4 grid-cols-2 xxxs:grid-cols-1'}>
                            <div className={'responsive-32 gap-16 grid xxxs:gap-4'}>
                                <h2 className={'responsive-48'}>Наши клиенты:</h2>
                                <ul className={'list-disc font-serif grid gap-6 xs:gap-3'}>
                                    <li>Организаторы мероприятий</li>
                                    <li>Владельцы магазинов на маркетплейсах</li>
                                    <li>Модели</li>
                                    <li>Счастливые люди</li>
                                </ul>
                                <div className={'flex gap-4 justify-between responsive-24 font-extra flex-wrap'}>
                                    <div className={'flex flex-col justify-center text-center items-center'}>
                                        <div className={'w-16 aspect-square xxxs:w-8'}>
                                            <ImageRel src={'/icons/1.svg'} alt={''} text={''}/>
                                        </div>
                                        <span>Соблюдаем сроки</span>
                                    </div>
                                    <div className={'flex flex-col justify-center text-center items-center'}>
                                        <div className={'w-16 aspect-square xxxs:w-8'}>
                                            <ImageRel src={'/icons/3.svg'} alt={''} text={''}/>
                                        </div>
                                        <span>Соблюдаем сроки</span>
                                    </div>
                                    <div className={'flex flex-col justify-center text-center items-center'}>
                                        <div className={'w-16 aspect-square xxxs:w-8'}>
                                            <ImageRel src={'/icons/4.svg'} alt={''} text={''}/>
                                        </div>
                                        <span>Соблюдаем сроки</span>
                                    </div>
                                    <div className={'flex flex-col justify-center text-center items-center'}>
                                        <div className={'w-16 aspect-square xxxs:w-8'}>
                                            <ImageRel src={'/icons/5.svg'} alt={''} text={''}/>
                                        </div>
                                        <span>Соблюдаем сроки</span>
                                    </div>
                                </div>
                                <div className={'inline-flex items-center justify-center'}>
                                    <BtnLine href={'#works'}>
                                        <BtnLineStyle text={'Наши работы'}/>
                                    </BtnLine>
                                </div>
                            </div>
                            <div className={'grid grid-cols-2 gap-8 xxxs:h-[18rem]'}>
                                <div>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={'/second/2.jpg'}
                                            alt={''}
                                            fill
                                            className="z-40 object-cover rounded-full"
                                            loading="lazy"
                                            quality={100}
                                        />
                                        <span className={'absolute responsive-32 font-extra z-40 bottom-0'}>Предметная съемка</span>
                                    </div>
                                </div>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={'/second/1.jpg'}
                                        alt={''}
                                        fill
                                        className="z-40 object-cover rounded-full"
                                        loading="lazy"
                                        quality={100}
                                    />
                                    <span
                                        className={'absolute responsive-32 font-extra z-40 bottom-0'}>Съемка модели</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/*third*/}
                <section className={'bg-gradient w-screen left-1/2 -ml-[50vw] relative p-8 gap-8 xs:p-4'} id={'rooms'}>
                    <div className={'grid gridSetka gap-8'}>
                        <h1>Наша студия и
                            залы</h1>
                        <div>
                            <StudioRooms/>
                        </div>
                        <div>
                            <p className={'responsive-48 font-sans text-center text-black'}>
                                Ознакомьтесь с каждым залом, узнайте преимущество и уникальность каждого, а по кнопке
                                ниже
                                вы сможете выбрать дату и время Вашей фотосессии
                            </p>
                        </div>
                        <div className="flex justify-center h-fit">
                            <TakeDate/>
                        </div>
                    </div>
                </section>

                {/*fourth*/}

                <section className={'grid gridSetka gap-48 xs:gap-24'}>
                    <section className={'grid grid-cols-12 gap-8 xxxs:grid-cols-6'}>
                        <div className={'grid gap-8 col-span-4 xxxs:col-span-8 xxxs:gap-4'}>
                            <h1 className={'text-left responsive-48 font-sans'}>Место где мечты становятся снимками</h1>
                            <p className={'responsive-32'}>
                                Фотостудия Счастье — это больше, чем просто место для съемок. Мы создаем атмосферу,
                                где каждый может ощутить себя звездой, пережить уникальные моменты и сохранить их
                                навсегда.
                            </p>
                            <p className={'responsive-32'}>
                                Наша команда заботливо подходит к каждому кадру, чтобы запечатлеть вашу красоту и
                                радость в мельчайших деталях. Загляните в наше Счастье, чтобы раскрыть свою историю и
                                ощутить магию фотографии!
                            </p>
                            <div className={'flex justify-center'}>
                                <BtnLine href={'#apparat'}>
                                    <BtnLineStyle text={'Аппаратура'}/>
                                </BtnLine>
                            </div>
                        </div>
                        <SetkaFourth/>
                    </section>

                    {/*fifth*/}

                    <section className={'grid gap-16'} id={'works'}>
                        <h1>
                            Наши работы
                        </h1>
                        <Slider/>
                    </section>

                    {/*sixth*/}

                    <section className={'grid gap-8'} id={'apparat'}>
                        <h1>Аппаратура</h1>
                        <div className={'grid grid-cols-12 gap-8 xxxs:grid-cols-6'}>
                            <SetkaSixth/>
                            <div className={'col-span-5 gap-8 grid xxxs:col-span-7 xxxs:gap-4'}>
                                <h1 className={'responsive-64 font-title tracking-small'}>Все для вашего идеального
                                    кадра</h1>
                                <p className={'responsive-32'}>
                                    Наша студия оснащена современной аппаратурой. Мы подбираем свет и цвета
                                    индивидуально
                                    для каждого проекта, создавая условия для качественных и профессиональных снимков.
                                </p>
                                <div className={'flex justify-center'}>
                                    <BtnLine href={'#price'}>
                                        <BtnLineStyle text={'Прайскурант'}/>
                                    </BtnLine>
                                </div>
                                <div className={'flex justify-center'}>
                                    <BtnLine href={'#contacts'}>
                                        <BtnLineStyle text={'Контакты'}/>
                                    </BtnLine>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*seventh*/}
                    <section id={'team'} className={'grid gap-16'}>
                        <h1>Наша команда</h1>
                        <SliderTeam/>
                    </section>

                    {/*eight*/}

                    <section id={'price'} className={'grid gap-8 cursor-default'}>
                        <h1>Прайскурант</h1>
                        <div className={'flex flex-wrap gap-8 justify-center'}>
                            <div className="rounded-lg shadow-sm w-[16rem] xxxs:w-[8rem] bg-black">
                                <div className={'w-full h-64 xxxs:h-32'}>
                                    <div className={'relative w-full h-full'}>
                                        <Image src={'/price/1.jpg'} alt={''}
                                               fill={true}
                                               style={{objectFit: "cover"}}
                                               sizes={'cover'}
                                               loading="lazy"
                                               quality={100}/>
                                    </div>
                                </div>
                                <div className={'p-4 xxxs:p-2'}>
                                    <h3 className="responsive-24 font-semibold mb-2">Портретная фотосессия</h3>
                                    <p className=" mb-4 responsive-16">Создайте стильные и выразительные портреты.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gradientEnd font-bold responsive-24">5 000 ₽</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-lg shadow-sm w-[16rem] xxxs:w-[8rem] bg-black">
                                <div className={'w-full h-64 xxxs:h-32'}>
                                    <div className={'relative w-full h-full'}>
                                        <Image src={'/price/2.jpg'} alt={''}
                                               fill={true}
                                               style={{objectFit: "cover"}}
                                               sizes={'cover'}
                                               loading="lazy"
                                               quality={100}/>
                                    </div>
                                </div>
                                <div className={'p-4 xxxs:p-2'}>
                                    <h3 className="responsive-24 font-semibold mb-2">Семейная фотосессия</h3>
                                    <p className=" mb-4 responsive-16">Сохраните незабываемые моменты с семьей.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gradientEnd font-bold responsive-24">7 000 ₽</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-lg shadow-sm w-[16rem] xxxs:w-[8rem] bg-black">
                                <div className={'w-full h-64 xxxs:h-32'}>
                                    <div className={'relative w-full h-full'}>
                                        <Image src={'/price/3.jpg'} alt={''}
                                               fill={true}
                                               style={{objectFit: "cover"}}
                                               sizes={'cover'}
                                               loading="lazy"
                                               quality={100}/>
                                    </div>
                                </div>
                                <div className={'p-4 xxxs:p-2'}>
                                    <h3 className="responsive-24 font-semibold mb-2">Детская фотосессия</h3>
                                    <p className=" mb-4 responsive-16">Яркие и веселые фотографии ваших детей.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gradientEnd font-bold responsive-24">4 500 ₽</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-lg shadow-sm w-[16rem] xxxs:w-[8rem] bg-black">
                                <div className={'w-full h-64 xxxs:h-32'}>
                                    <div className={'relative w-full h-full'}>
                                        <Image src={'/price/4.jpg'} alt={''}
                                               fill={true}
                                               style={{objectFit: "cover"}}
                                               sizes={'cover'}
                                               loading="lazy"
                                               quality={100}/>
                                    </div>
                                </div>
                                <div className={'p-4 xxxs:p-2'}>
                                    <h3 className="responsive-24 font-semibold mb-2">Предметная съемка</h3>
                                    <p className=" mb-4 responsive-16">Идеально для онлайн-магазинов.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gradientEnd font-bold responsive-24">6 000 ₽</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-lg shadow-sm w-[16rem] xxxs:w-[8rem] bg-black">
                                <div className={'w-full h-64 xxxs:h-32'}>
                                    <div className={'relative w-full h-full'}>
                                        <Image src={'/price/5.jpg'} alt={''}
                                               fill={true}
                                               style={{objectFit: "cover"}}
                                               sizes={'cover'}
                                               loading="lazy"
                                               quality={100}/>
                                    </div>
                                </div>
                                <div className={'p-4 xxxs:p-2'}>
                                    <h3 className="responsive-24 font-semibold mb-2">Съемка для каталога</h3>
                                    <p className=" mb-4 responsive-16">Высококачественные фото для каталогов.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gradientEnd font-bold responsive-24">8 000 ₽</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col items-center gap-8 my-4'}>
                            <div className={'xxxs:hidden'}>
                                <TakeDate/>
                            </div>
                            <p className={'responsive-32 text-center'}>Остались вопросы?
                                Перейдите в раздел “Контакты”, мы решим вашу проблему/вопрос, звоните</p>
                        </div>
                    </section>

                    {/*ninth*/}
                    <section className={'grid gap-8'} id={'contacts'}>
                        <h1>Контакты</h1>
                        <section className={'flex gap-8 xxxs:flex-col'}>

                            <div className={'w-[30%] grid gap-8 xxxs:w-full'}>
                                <div className={'relative w-ful aspect-square'}>
                                    <Image
                                        src={'/contacts/1.jpg'} alt={''}
                                        fill={true}
                                        className={'object-cover rounded-full'}
                                    />
                                </div>
                                <div className={'flex items-center justify-center'}>
                                    <TakeDate/>
                                </div>
                            </div>
                            <div className={'w-[70%] xxxs:w-full'}>
                                <div className={'w-[70%] mx-auto grid gap-8 xxxs:w-full'}>
                                    <p className={'responsive-32 font-extra'}>Остались воапросы?
                                        Заполните форму и с вами свяжутся наши специалисты</p>
                                    <Input type={'email'} value={'Ваша почта'}/>
                                    <Input type={'phone'} value={'Ваш телефон'}/>
                                    <textarea
                                        placeholder="Введите ваши комментарии"
                                        className="border-2 border-green-500 rounded-input p-2 w-full text-black"
                                    ></textarea>
                                    <div className={'inline-flex justify-center'}>
                                        <BtnForm/>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Location/>
                    </section>
                </section>
            </main>
        </>
    );
}
