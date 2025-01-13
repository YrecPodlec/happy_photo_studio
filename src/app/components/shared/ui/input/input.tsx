import React from 'react';

const Input = ({value, type}:{value: string, type: string}) => {
    return (
        <input
            type={type}
            placeholder={value}
            className="border-2 border-green-500 rounded-input p-2 w-full text-black"
        />
    );
};

export default Input;