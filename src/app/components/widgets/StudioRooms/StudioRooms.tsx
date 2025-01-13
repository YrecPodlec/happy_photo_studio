import React from 'react';
import { ImageRel } from "@/app/components/shared";
import { Modal } from "@/app/components/features";

interface Props {
    Title: string;
    text: string;
}
export const Hover = ({ Title, text }: Props) => {
    return (
        <div
            className="flex flex-col gap-4 items-center justify-between relative bottom-12 xxxs:bottom-8 h-full z-50 bg-black bg-opacity-50 py-2 group-hover:bottom-full xxxs:gap-1">
            <h2 className={'responsive-32'}>
                {Title}
            </h2>
            <div className="flex font-primary responsive-16 h-full justify-center items-center p-4 xxxs:p-1">
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
};

const generateRoomImages = (roomName: string, count: number, start: number = 1): string[] => {
    return Array.from({ length: count }, (_, i) => `/rooms/${roomName}/${start + i}.jpg`);
};

const StudioRooms = () => {
    const data = [
        {
            title: 'NEON',
            text: 'Зал для тематической фотосессии в неоновом стиле. Идеально подойдет для тех, кто хочет добавить яркости и дерзости в свои фотографии, создавая неповторимые образы в свете неона',
            image: '/modalBlocks/neon.jpg',
            modalTitle: "Как выглядит зал",
            workExamples: 'Наши работы',
            roomImages: generateRoomImages('neon', 4),
            workExamplesImages: generateRoomImages('neon', 12, 5),
        },
        {
            title: 'БОГЕМНЫЙ',
            text: 'Теплые пастельные тона, винтажная мебель и натуральные ткани создают уютную, расслабленную атмосферу. Мягкий свет и детали делают уголок идеальным для стильных портретов и творческих съемок',
            image: '/modalBlocks/bohem.jpg',
            modalTitle: "Как выглядит зал",
            workExamples: 'Наши работы',
            roomImages: generateRoomImages('bohemian', 4),
            workExamplesImages: generateRoomImages('bohemian', 10, 5),
        },
        {
            title: 'ГОТИЧЕСКИЙ',
            text: 'Темные тона, высокие арки и эффектный контраст света создают атмосферу мистики и величия. Декор с элементами средневековья и грубые текстуры добавляют глубины и драматизма вашим снимкам',
            image: '/modalBlocks/goth.jpg',
            modalTitle: "Как выглядит зал",
            workExamples: 'Наши работы',
            roomImages: generateRoomImages('gothic', 4),
            workExamplesImages: generateRoomImages('gothic', 11, 5),
        },
        {
            title: 'DARK SIDE',
            text: 'Глубокие тени, резкий свет и минималистичный дизайн создают атмосферу таинственности и напряжения. Этот зал — идеальный выбор для тех, кто хочет добавить драматизма и мощи своим снимкам',
            image: '/modalBlocks/dark.jpg',
            modalTitle: "Как выглядит зал",
            workExamples: 'Наши работы',
            roomImages: generateRoomImages('dark', 4),
            workExamplesImages: generateRoomImages('dark', 11, 5),
        }
    ];

    return (
        <div className={'grid grid-cols-4 gap-8 xxxs:grid-cols-2'}>
            {data.map((item, i) => (
                <div key={i}>
                    <Modal
                        childrenBtn={<ImageRel src={item.image} alt={item.title} text={''} />}
                        hover={<Hover Title={item.title} text={item.text} />}
                        className={'group aspect-square overflow-hidden rounded-input cursor-pointer relative'}
                        param1={'scale-1'}
                        param2={'scale-0'}>
                        <section className={'grid gap-8'}>
                            <h1>{item.modalTitle}</h1>
                            <div className={'grid grid-cols-4 gap-4 xs:grid-cols-2 xxxs:grid-cols-1'}>
                                {item.roomImages.map((photo, j) => (
                                    <div key={j}>
                                        <div
                                            className={'group aspect-square overflow-hidden rounded-input relative'}>
                                            <ImageRel src={photo} alt={`Room Photo`} text={''} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <h1>{item.workExamples}</h1>
                            <div className={'columns-xs'}>
                                {item.workExamplesImages.map((photo, j) => (
                                    <img src={photo} alt="" key={j} className={'w-full mb-4 rounded-input'}/>
                                ))}
                            </div>
                        </section>
                    </Modal>
                </div>
            ))}
        </div>
    );
};

export default StudioRooms;
