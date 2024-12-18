import React from 'react';
import './css.css'
const Page = () => {
    return (
        <section className={'mainBlock'}>
            <div className={'test1'}>
                <span>
                    АБСОЛЮТНОЕ ПОЗИЦИОНИРОВАНИЕ
                </span>
            </div>
            <div className={'test2'}>
                <div>
                    BLOCK
                </div>
                <div>
                    BLOCK
                </div>
                <div>
                    BLOCK
                </div>
                <div>
                    BLOCK
                </div>
                <div>
                    BLOCK
                </div>
                <div>
                    BLOCK
                </div>
                <div>
                    BLOCK
                </div>
                <div>
                    BLOCK
                </div>
                <span className={'spanSpan'}>
                    TEXT TEXT RELATIVE
                </span>
            </div>
            <div className={'divFix'}>
                FIXED
            </div>
            <div className={'Big'}>
                <span>TEST</span>
                <div className={'stickyDiv'}>
                    STICKY
                </div>
            </div>
            <div className={'Big'}>
                TEST 2
            </div>
        </section>
    );
};

export default Page;