import React from 'react';

const Input = ({value, type}:{value: string, type: string}) => {
    return (
        <input
            readOnly
            type={type}
            id="start-time"
            name="start-time"
            value={value}
            className="border-2 border-green-500 rounded-input p-2 w-full text-black"
        />
    );
};

export default Input;