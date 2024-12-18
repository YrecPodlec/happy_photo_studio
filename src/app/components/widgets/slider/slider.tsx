"use client";
import React from "react";
import { Pagination } from "@/app/components/features";
import { ourWorks } from "@/app/components/shared/data/data";
import Image from "next/image";
import {BtnLine, BtnLineStyle, BtnMain} from "@/app/components/shared";

const Slider = () => {
    return (
        <Pagination maxPage={ourWorks.length - 1}>
            {(page) => (
                <section className={'flex w-full gap-8 xxxs:gap-2'}>
                    <div className="w-[30%] xs:w-[50%]">
                        {ourWorks[page]?.image && (
                            <div className={'w-full h-[512px] relative xxxs:h-[360px] xxxxs:h-[220px]'}>
                                <Image
                                    src={ourWorks[page].image}
                                    alt="Наши работы"
                                    className="w-full object-cover rounded-full"
                                    fill
                                    layout="cover"
                                />
                            </div>
                        )}
                    </div>
                    <div className={'w-[70%] grid gap-8 xs:w-[50%]'}>
                        {
                            ourWorks[page] && (
                                <div>
                                    <h1>
                                        {ourWorks[page]?.title}
                                    </h1>
                                    <p className={'responsive-32 font-extra'}>
                                        {ourWorks[page]?.description.map((text, index) => (
                                            <span key={index}>
                                                {text}
                                                {index !== ourWorks[page]?.description.length - 1 && <><br/><br/></>}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            )
                        }
                        <div className={'items-center flex flex-col gap-8'}>
                            <BtnLine href={'#team'}>
                                <BtnLineStyle text={'Наша команда'}/>
                            </BtnLine>
                            <BtnMain text={'Увидеть больше'}/>
                        </div>
                    </div>
                </section>
            )}
        </Pagination>
    );
};

export default Slider;
