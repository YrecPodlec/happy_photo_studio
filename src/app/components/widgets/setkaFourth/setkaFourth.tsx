import React from 'react';
import {ImageRel} from "@/app/components/shared";
import {Hover} from "@/app/components/widgets/StudioRooms/StudioRooms";
import {Modal} from "@/app/components/features";

export const Location = () => {
    return(
        <section className={'grid gap-8'}>
            <div className={'flex gap-8 items-start xs:flex-col justify-center xs:items-center'}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.3712653940497!2d92.8744385857898!3d56.012242671686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7ae38f141c1bf%3A0xe88de8f8ea3cd651!2sMira%20Ave%2C%2049%2C%20Krasnoyarsk%2C%20Krasnoyarskiy%20kray%2C%20660049!5e0!3m2!1sen!2sru!4v1736776966863!5m2!1sen!2sru"
                    loading="lazy"
                    className={'w-2/6 xs:w-full h-96'}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className={'grid gap-16'}>
                    <div className={'flex gap-8 text-center items-center xs:flex-col'}>
                        <h1>Адрес:</h1>
                        <p>
                            г. Красноярск, проспект Мира, 49
                        </p>
                    </div>
                    <div className={'flex gap-8 text-center items-center xs:flex-col'}>
                        <h1>Время работы:</h1>
                        <p>
                            Понедельник - Воскресенье, 09:00 - 20:00
                        </p>
                    </div>
                    <div className={'flex gap-8 text-center items-center xs:flex-col'}>
                        <h1>Телефон и почта:</h1>
                        <div>
                            <p>
                                +79-84-546-78-98
                            </p>
                            <p>
                                happy-studio@gmail.com
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <h1>Социальные сети:</h1>
                <div className={'flex justify-center gap-8 flex-wrap'}>
                    <a href="#">
                        <img src="/media/1.png" alt="" className={'w-[64px]'}/>
                    </a>
                    <a href="#">
                        <img src="/media/2.png" alt="" className={'w-[64px]'}/>
                    </a>
                    <a href="#">
                        <img src="/media/3.png" alt="" className={'w-[64px]'}/>
                    </a>
                    <a href="#">
                        <img src="/media/4.png" alt="" className={'w-[64px]'}/>
                    </a>
                    <a href="">
                        <img src="/media/5.png" alt="" className={'w-[64px]'}/>
                    </a>
                    <a href="#">
                        <img src="/media/6.png" alt="" className={'w-[64px]'}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

const SetkaFourth = () => {
    const data = [
        {
            className: 'col-span-3',
            image: '/setkaFourth/1.jpg',
            title: 'Как добраться?',
            text: 'Точный путиводитель чтобы вы быстро смогли найти нашу студию',
            children: <Location/>
        },
        {
            className: 'col-span-5',
            image: '/setkaFourth/2.jpg',
            title: 'История нашей студии',
            text: 'Узнайте историю нашей студии, о её становлении и ценностях',
            children: <Location/>
        },
        {
            className: 'col-span-4',
            image: '/setkaFourth/3.jpg',
            title: 'Мероприятия',
            text: 'Мы часто проводим мероприятия, ознакомтесь в каких можете принять участие Вы!',
            children: <Location/>
        },
        {
            className: 'col-span-4',
            image: '/setkaFourth/4.jpg',
            title: 'Отзывы',
            text: 'Мы ценим наших клиентов и принимаем обратную связь, узнайте что от нас думают другие',
            children: <Location/>
        }
    ]
    return (
        <section className={'grid col-span-8 grid-cols-8 gap-8'}>
            {
                data.map((item, i) =>
                    <div key={i} className={`${item.className}`}>
                        <Modal childrenBtn={
                            <ImageRel src={item.image} alt={item.title} text={''}/>
                        } className={'group overflow-hidden rounded-input cursor-pointer relative w-full h-full z-40'}
                               param2={'scale-0'} param1={'scale-1'} hover={<Hover Title={item.title} text={item.text}/>}>
                            <div className={'grid gap-16'}>
                                <h1>
                                    {item.title}
                                </h1>
                                {item.children}
                            </div>
                        </Modal>

                    </div>)
            }
        </section>
    );
};

export default SetkaFourth;