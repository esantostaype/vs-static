import styles from './ProjectBackground.module.css';

export const ProjectBackground = () => {

    const handleBackgroundClick = () => {
        window.history.back();
    };
    
    return (
        <div className={ styles.background } onClick={ handleBackgroundClick }></div>
    )
}