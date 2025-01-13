"use client";
import React from "react";

interface Props {
    children: React.ReactNode;
    href: string;
}

const BtnLine = ({ children, href }: Props) => {
    return (
        <a
            href={`${href}`}
            className="w-fit"
        >
            {children}
        </a>
    );
};

export default BtnLine;
