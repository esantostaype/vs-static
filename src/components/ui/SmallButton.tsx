import { type FC, useState } from 'react';
import { Arrow } from './Icons';

interface Props {
    hashTo: string;
    label: string;
}

export const MainButton:FC<Props> = ({ hashTo, label }) => {

    const [ targetSection ] = useState(`#${hashTo}`);

    const scrollToSection = () => {
        const targetElement = document.querySelector( targetSection ) as HTMLElement;
        if ( targetElement ) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop,
            });
        }
    };

    return (
        <button className="main-button" onClick={ scrollToSection }>
            <span className="main-button__label">{ label }</span>
            <div className="main-button__icon">
                <Arrow height="16px" width="16px" viewBox="0 0 16 16" fill="#fff"/>
            </div>
        </button>
    );
};