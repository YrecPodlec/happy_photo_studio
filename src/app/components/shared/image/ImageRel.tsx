import React from 'react';
import Image from "next/image";

interface Props {
    src: string,
    alt: string,
    text: string;
}

const ImageRel = ({src, alt, text}: Props) => {
    return (
        <div className={'relative w-full h-full'}>
            <Image
                src={src}
                alt={alt}
                fill={true}
                style={{objectFit: "cover"}}
                sizes={'cover'}
                className={'z-40'}
                loading="lazy"
                quality={100}
            />
            <div className={'z-50 relative'}>{text}</div>
        </div>
    );
};

export default ImageRel;