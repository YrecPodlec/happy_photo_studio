import React from 'react';
import {Modal} from "@/app/components/features";
import {ImageRel} from "@/app/components/shared";
import {Hover} from "@/app/components/widgets/StudioRooms/StudioRooms";

const SetkaSixth = () => {
    return (
        <section className={'col-span-7 grid grid-cols-7 gap-8 xxxs:order-2'}>
            <div className={'col-span-4'}>
                <div className={`relative w-full rounded-input overflow-hidden group h-full`}>
                    <ImageRel src={'/apparat/1.jpg'} alt={'item.title'} text={''}/>
                </div>
            </div>
            <div className={'col-span-3 grid gap-8 grid-rows-2 xxxs:h-[25rem]'}>
                <div className={`relative w-full rounded-input overflow-hidden group h-full`}>
                    <ImageRel src={'/apparat/2.jpg'} alt={''} text={''}/>
                </div>
                <div className={'relative w-full rounded-input overflow-hidden group h-full'}>
                    <ImageRel src={'/apparat/3.jpg'} alt={''} text={''}/>
                </div>
            </div>
        </section>
    );
};

export default SetkaSixth;