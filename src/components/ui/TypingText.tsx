import React from 'react';

import { TypeAnimation } from 'react-type-animation';

interface ProcessProps {
    array:  {
        name: string;
    }[];
}

export const TypingText: React.FC<ProcessProps> = ({ array }) => {

    const generateSequence = () => {
        const sequenceArray: ( string | number )[] = [];

        array.forEach(( adjective ) => {
            sequenceArray.push( adjective.name, 2000 );
        });

        return sequenceArray;
    };

    return (
        <TypeAnimation
            sequence={ generateSequence() }
            wrapper="span"
            speed={ 50 }
            repeat={Infinity}
            cursor={false}
        />
    )
}