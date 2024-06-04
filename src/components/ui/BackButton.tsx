import { useEffect } from 'react';
import styles from './BackButton.module.css';

export const BackButton = () => {

    const handleButtonClick = () => {
        window.history.back();
    };

    const handleKeyPress = ( event: KeyboardEvent ) => {
        if ( event.key === 'Escape' ) {
            window.history.back();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    
    return (
        <button className={ styles.back } onClick={ handleButtonClick }>
            <svg viewBox="0 0 16 16" width="16px" height="16px">
                <path fill='#fff' d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
        </button>
    )
}