"use client";
import React from "react";
import { Pagination } from "@/app/components/features";
import {Team} from "@/app/components/shared/data/data";
import Image from "next/image";
import {BtnLine, BtnLineStyle} from "@/app/components/shared";

const SliderTeam = () => {
    return (
        <Pagination maxPage={Team.length - 1}>
            {(page) => (
                <section className={'flex w-full gap-8 xxxs:gap-2 xxxs:flex-col'}>
                    <div className="w-[30%] xs:w-[50%] xxxs:w-full">
                        {Team[page]?.image && (
                            <div className={'w-full h-[578px] relative xxxs:h-[360px] xxxxs:h-[220px]'}>
                                <Image
                                    src={Team[page].image}
                                    alt="Наши работы"
                                    className="w-full object-cover rounded-full"
                                    fill
                                    layout="cover"
                                />
                            </div>
                        )}
                    </div>
                    <div className={'w-[70%] grid gap-8 xs:w-[50%] xxxs:gap-2 xxxs:w-full'}>
                        {
                            Team[page] && (
                                <div className={'grid gap-8 border-b-4 xxxs:gap-2 xxxxs:border-b-2'}>
                                    <h1>
                                        {Team[page]?.title}
                                    </h1>
                                    <h2 className={'responsive-48 font-title tracking-small'}>{Team[page]?.title2}</h2>
                                    <p className={'responsive-32 font-extra'}>
                                        {Team[page]?.description.map((text, index) => (
                                            <span key={index}>
                                                {text}
                                                {index !== Team[page]?.description.length - 1 && <><br/><br/></>}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            )
                        }
                        <div className={'flex justify-between flex-wrap gap-4'}>
                            {
                                Team[page]?.media.map((value, index) =>
                                    <div key={index} className={'w-fit inline-block'}>
                                        <BtnLine href={''}>
                                            <BtnLineStyle text={value.name}/>
                                        </BtnLine>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </section>
            )}
        </Pagination>
    );
};

export default SliderTeam;
