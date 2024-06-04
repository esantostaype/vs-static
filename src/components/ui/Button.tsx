import { type FC, useState } from 'react';
import { Arrow } from './Icons';

interface Props {
    disabled?: boolean;
    isLink?: boolean;
    link?: string;
    hashTo?: string;
    label: string;
    size: string;
}

export const Button:FC<Props> = ({ hashTo, label, size, isLink, link }) => {

    const [ targetSection ] = useState(`#${hashTo}`);

    const scrollToSection = () => {
        "use strict"
        const targetElement = document.querySelector( targetSection ) as HTMLElement;
        if ( targetElement ) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop,
            });
        }
    };

    return (
        <>
            {
                isLink
                ? (
                    <a href={ link } className={`${size}-button`}>
                        <span className={`${size}-button__label`}>{ label }</span>
                        <div className={`${size}-button__icon`}>
                            <Arrow height="10px" width="10px" viewBox="0 0 16 16" fill="#000"/>
                        </div>
                    </a>
                )
                : (
                    <button className={`${size}-button`} onClick={ scrollToSection }>
                        <span className={`${size}-button__label`}>{ label }</span>
                        <div className={`${size}-button__icon`}>
                            <Arrow height="16px" width="16px" viewBox="0 0 16 16" fill="#fff"/>
                        </div>
                    </button>
                )
            }
            
        </>
    );
};