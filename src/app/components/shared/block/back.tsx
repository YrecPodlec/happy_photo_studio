import React from 'react';

const Back = () => {
    return (
        <div
            style={{
                background: 'repeating-linear-gradient(90deg, #0000,#0000 5.8%,#ffff 6%,#ffff 16px)'

            }}
            className={'fixed top-0 left-0 w-full h-full -z-50 opacity-20'}
        />
    );
};

export default Back;