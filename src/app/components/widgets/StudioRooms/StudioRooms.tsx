import React from 'react';
import {Modal} from "@/app/components/features";
import {ImageRel} from "@/app/components/shared";
interface Props {
    Title: string;
    text: string;
}
export const Hover = ({Title, text}: Props) => {
    return (
        <div
            className="flex flex-col gap-4 items-center h-full justify-between relative bottom-12 z-50 bg-black bg-opacity-50 py-4 xxxxs:py-1 xxxxs:bottom-6 group-hover:bottom-full xxxs:gap-1">
            <h2 className={'responsive-32'}>
                {Title}
            </h2>
            <div className="flex font-primary responsive-16 h-full justify-center items-center p-4">
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
}

const StudioRooms = () => {
    const data = [
        {
            title: 'NEON',
            text: 'Зал для тематической фотосессии в неоновом стиле. Идеально подойдет для тех, кто хочет добавить яркости и дерзости в свои фотографии, создавая неповторимые образы в свете неона',
            image: '/modalBlocks/neon.jpg',
            article: 'asasdasd sandb jas jhasbd jhasd jhjasbd jhasbd habsjd basj hd'
        },
        {
            title: 'БОГЕМНЫЙ',
            text: 'Теплые пастельные тона, винтажная мебель и натуральные ткани создают уютную, расслабленную атмосферу. Мягкий свет и детали делают уголок идеальным для стильных портретов и творческих съемок',
            image: '/modalBlocks/bohem.jpg',
            article: 'asasdasd sandb jas jhasbd jhasd jhjasbd jhasbd habsjd basj hd'
        },
        {
            title: 'ГОТИЧЕСКИЙ',
            text: 'Темные тона, высокие арки и эффектный контраст света создают атмосферу мистики и величия. Декор с элементами средневековья и грубые текстуры добавляют глубины и драматизма вашим снимкам',
            image: '/modalBlocks/goth.jpg',
            article: 'asasdasd sandb jas jhasbd jhasd jhjasbd jhasbd habsjd basj hd'
        },
        {
            title: 'DARK SIDE',
            text: 'Глубокие тени, резкий свет и минималистичный дизайн создают атмосферу таинственности и напряжения. Этот зал — идеальный выбор для тех, кто хочет добавить драматизма и мощи своим снимкам',
            image: '/modalBlocks/dark.jpg',
            article: 'asasdasd sandb jas jhasbd jhasd jhjasbd jhasbd habsjd basj hd'
        }
    ]
    return (
        <div className={'grid grid-cols-4 gap-8 xxxs:grid-cols-2'}>
            {
                data.map((item, i) =>
                    <div key={i}>
                        <Modal childrenBtn={
                            <ImageRel src={item.image} alt={item.title} text={''}/>
                        } hover={<Hover Title={item.title} text={item.text}/>} className={'aspect-square relative w-full rounded-input overflow-hidden group'} param1={'scale-1'} param2={'scale-0'}>
                            {item.article}
                        </Modal>
                    </div>)
            }
        </div>
    );
};

export default StudioRooms;