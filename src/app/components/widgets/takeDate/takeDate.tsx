import React from 'react';
import {Modal} from "@/app/components/features";
import {BtnForm, BtnMain, Input} from "@/app/components/shared";

const TakeDate = () => {
    const mounth = 31;
    const renderBlocks = (count: number) => {
        return Array.from({ length: count }, (_, index) => (
            <div key={index} className="w-fit px-4 py-4 border-4 cursor-default">
                <span className={'font-extra responsive-24'}>Декабрь {index + 1}</span>
                <div className={'py-4 grid gap-1 responsive-24'}>
                    <span>Свободно:</span>
                    <div>
                        <div>12:00 - 14:00</div>
                        <div>15:00 - 19:00</div>
                        <div>19:00 - 20:00</div>
                    </div>
                </div>
            </div>
        ));
    };
    return (
        <div>
        <Modal className={''} childrenBtn={<BtnMain text={'Назначить Дату'}/>} hover={''} param1={'scale-1'} param2={'scale-0'}>
                <section className={'grid gap-4'}>
                    <h1 className={'font-title tracking-medium responsive-48 text-center'}>
                        НАЗНАЧЕНИЕ ДАТЫ
                    </h1>
                    <span className={"text-center"}>Заполните форму, указав удобное время/дату</span>
                    <div className={'flex gap-4'}>
                        <div className={'flex gap-4 items-center responsive-32 '}>
                            <span>ЗАЛ: </span>
                            <div>
                                <select id="dropdown" name="options" className={'border-0 text-black bg-gradientStart p-2 cursor-pointer rounded-input'}>
                                    <option value="option1">НЕОН</option>
                                    <option value="option2">БОГЕМНЫЙ</option>
                                    <option value="option3">ГОТИЧЕСКИЙ</option>
                                    <option value="option4">DARK SIDE</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={'flex px-4 xxs:flex-col'}>
                        <div className={'flex flex-wrap justify-center gap-4 w-2/3 xxs:w-full'}>
                            {
                                renderBlocks(mounth)
                            }
                        </div>
                        <div className={'w-1/3 xxs:w-full'}>
                            <h1 className={'responsive-32 my-4 font-extra'}>Заполните форму бронирования зала</h1>
                            <form className={'grid gap-4 responsive-24'} action="/" method="POST">
                                <div className={'flex gap-4 items-center'}>
                                    <label htmlFor="loft" className="font-bold">Зал</label>
                                    <select
                                        id="dropdown"
                                        name="options"
                                        className="border-2 border-green-500 rounded-input p-2 w-full text-black cursor-pointer"
                                    >
                                        <option value="option1">НЕОН</option>
                                        <option value="option2">БОГЕМНЫЙ</option>
                                        <option value="option3">ГОТИЧЕСКИЙ</option>
                                        <option value="option4">DARK SIDE</option>
                                    </select>
                                </div>
                                <div className={'flex gap-4 items-center'}>
                                    <label htmlFor="date" className="font-bold">Дата</label>
                                    <Input value={'Дата'} type={'date'}/>
                                </div>
                                <div className={'flex gap-4 items-center'}>
                                    <label htmlFor="start-time" className="font-bold">Время начала</label>
                                    <Input value={'Время начала'} type={'time'}/>
                                </div>
                                <div className={'flex gap-4 items-center'}>
                                    <label htmlFor="end-time" className="font-bold">Время окончания</label>
                                    <Input value={"Время конца"} type={'time'}/>
                                </div>
                                <div className={'flex gap-4 items-center'}>
                                    <label htmlFor="name" className="font-bold">Имя</label>
                                    <Input value={"Имя"} type={'text'}/>
                                </div>
                                <div className={'flex gap-4 items-center'}>
                                    <label htmlFor="phone" className="font-bold">Телефон</label>
                                    <Input type={'phone'} value={'+79197755777'}/>
                                </div>
                                <div className={'flex gap-4 items-center'}>
                                    <label htmlFor="email" className="font-bold">E-mail</label>
                                    <Input type={'email'} value={'mailcool@gmail.com'}/>
                                </div>
                                <div className={'flex gap-4 items-center'}>
                                    <label htmlFor="payment-method" className="font-bold">Способ предоплаты</label>
                                    <select
                                        id="payment-method"
                                        name="payment-method"
                                        className="border-2 border-green-500 rounded-input p-2 w-full text-black"
                                    >
                                        <option value="cash">Наличными в студии</option>
                                        <option value="card">Банковской картой</option>
                                        <option value="transfer">Банковский перевод</option>
                                    </select>
                                </div>
                                <div className="checkbox-group flex gap-4 items-center w-full justify-between">
                                    <Input type={'checkbox'} value={''}/>
                                    <label htmlFor="up-to-10" className="font-bold">Количество человек до 10?</label>
                                </div>
                                <div className="checkbox-group flex gap-4 items-center w-full justify-between">
                                    <Input type={'checkbox'} value={''}/>
                                    <label htmlFor="makeup-room" className="font-bold">Гримерка?</label>
                                </div>
                                <textarea
                                    placeholder="Введите ваши комментарии"
                                    className="border-2 border-green-500 rounded-input p-2 w-full text-black"
                                ></textarea>
                                <div className={'inline-flex justify-center'}>
                                    <BtnForm/>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>
        </Modal>
        </div>
    );
};

export default TakeDate;