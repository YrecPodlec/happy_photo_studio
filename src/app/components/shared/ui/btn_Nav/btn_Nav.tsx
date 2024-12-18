import React from 'react';
import Link from "next/link";
interface Props {
    text: string;
    href: string;
}
const BtnNav = ({href, text}: Props) => {
    return (
        <Link href={`#${href}`}>
            {text}
        </Link>
    );
};

export default BtnNav;