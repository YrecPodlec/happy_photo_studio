import React from 'react';
interface Props {
    active: boolean;
    setActive: (active: boolean) => void;
    children: React.ReactNode;
    param1: string;
    param2: string;

}
const ModalWindow = ({ active, setActive, children, param1, param2 }: Props) => {
    return (
        <div
            className={`z-50 w-screen h-screen fixed top-0 left-0 flex items-center justify-center ${active ? "opacity-100 pointer-events-all" : "opacity-0 pointer-events-none"} bg-black bg-opacity-40 z-50`}
            onClick={() => { setActive(false) }}>

            <div
                className={`w-[94%] h-[92%] p-4 xxxs:p-1 rounded-[48px] bg-backModal ${active ? `${param1}` : `${param2}`}`}
                onClick={e => e.stopPropagation()}>
                <header className="flex justify-between px-8">
                    <div className="ml-auto">
                        <button
                            className={'responsive-24 p-1 px-2 text-black rounded-3xl cursor-pointer inline-block hover:px-8 hover:bg-gradientEnd bg-gradientStart'}
                            onClick={() => setActive(false)}>
                            CLOSE
                        </button>
                    </div>
                </header>
                <section className={'overflow-y-scroll overflow-x-hidden h-[95%] mt-4'}>
                    {children}
                </section>
            </div>
        </div>
    );
};

export default ModalWindow;