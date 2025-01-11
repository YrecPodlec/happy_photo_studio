import React from 'react';
import {ImageRel} from "@/app/components/shared";
import {Hover} from "@/app/components/widgets/StudioRooms/StudioRooms";

const SetkaFourth = () => {
    const data = [
        {
            className:'col-span-3',
            image: '/setkaFourth/1.jpg',
            title: 'Как добраться?',
            text: 'Точный путиводитель чтобы вы быстро смогли найти нашу студию'
        },
        {
            className:'col-span-5',
            image: '/setkaFourth/2.jpg',
            title: 'История нашей студии',
            text: 'Узнайте историю нашей студии, о её становлении и ценностях'
        },
        {
            className:'col-span-4',
            image: '/setkaFourth/3.jpg',
            title: 'Мероприятия',
            text: 'Мы часто проводим мероприятия, ознакомтесь в каких можете принять участие Вы!'
        },
        {
            className:'col-span-4',
            image: '/setkaFourth/4.jpg',
            title: 'Отзывы',
            text: 'Мы ценим наших клиентов и принимаем обратную связь, узнайте что от нас думают другие'
        }
    ]
    return (
        <section className={'grid col-span-8 grid-cols-8 gap-8'}>
            {
                data.map((item, i) =>
                    <div key={i} className={`${item.className}`}>
                        <div className={'group overflow-hidden rounded-input cursor-pointer relative w-full h-full z-40'}>
                            <ImageRel src={item.image} alt={item.title} text={''}/>
                            <Hover Title={item.title} text={item.text}/>
                        </div>
                    </div>)
            }
        </section>
    );
};

export default SetkaFourth;