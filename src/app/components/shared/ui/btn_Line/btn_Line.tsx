"use client";
import React from "react";
import {animate} from "framer-motion";

interface Props {
    children: React.ReactNode;
    href: string;
}

const BtnLine = ({ children, href }: Props) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 64;
            const currentPosition = window.scrollY;

            animate(currentPosition, targetPosition, {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                onUpdate: (latest) => window.scrollTo(0, latest),
            });
        }
    };

    return (
        <a
            onClick={handleClick}
            href={`#${href}`}
            className={'w-fit'}
        >
            {children}
        </a>
    );
};

export default BtnLine;
