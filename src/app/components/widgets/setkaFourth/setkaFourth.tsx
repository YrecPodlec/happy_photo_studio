import React from 'react';
import {Modal} from "@/app/components/features";
import {ImageRel} from "@/app/components/shared";
import {Hover} from "@/app/components/widgets/StudioRooms/StudioRooms";

const SetkaFourth = () => {
    const data = [
        {
            className:'col-span-3',
            image: '/setkaFourth/1.jpg',
            title: 'Как добраться?',
            text: 'Точный путиводитель чтобы вы быстро смогли найти нашу студию',
            article: 'фывфы вфы в фыв фы вфыв фыв фы вфы вфы вфы вфы в',
        },
        {
            className:'col-span-5',
            image: '/setkaFourth/2.jpg',
            title: 'История нашей студии',
            text: 'Узнайте историю нашей студии, о её становлении и ценностях',
            article: 'фывфы вфы в фыв фы вфыв фыв фы вфы вфы вфы вфы в',
        },
        {
            className:'col-span-4',
            image: '/setkaFourth/3.jpg',
            title: 'Мероприятия',
            text: 'Мы часто проводим мероприятия, ознакомтесь в каких можете принять участие Вы!',
            article: 'фывфы вфы в фыв фы вфыв фыв фы вфы вфы вфы вфы в',
        },
        {
            className:'col-span-4',
            image: '/setkaFourth/4.jpg',
            title: 'Отзывы',
            text: 'Мы ценим наших клиентов и принимаем обратную связь, узнайте что от нас думают другие',
            article: 'фывфы вфы в фыв фы вфыв фыв фы вфы вфы вфы вфы в',
        }
    ]
    return (
        <section className={'grid col-span-8 grid-cols-8 gap-8'}>
            {
                data.map((item, i) =>
                    <div key={i} className={`${item.className}`}>
                        <Modal childrenBtn={
                            <ImageRel src={item.image} alt={item.title} text={''}/>
                        } hover={<Hover Title={item.title} text={item.text}/>} className={`relative w-full rounded-input overflow-hidden group h-full z-40`} param1={'scale-1'} param2={'scale-0'}>
                            <div className={'z-50'}>
                                {item.article}
                            </div>
                        </Modal>
                    </div>)
            }
        </section>
    );
};

export default SetkaFourth;