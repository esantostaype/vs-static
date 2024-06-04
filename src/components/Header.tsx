import { useState, useEffect } from "react"

export const Header = () => {
    
    const [ scrollTopData, setScrollTopData ] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if ( window.scrollY < 15) {
                setScrollTopData('');
            } else {
                setScrollTopData('scrolled');
            }
        });
    }, []);

    return (
        <header className={`site-header ${ scrollTopData }`}>
            <div className="site-header__content">
                <a href="/" rel="home" className="logo">
                    <img src="/images/vortex-iso.svg" width="35" height="30" alt="Iso" className="iso" />
                    <img src="/images/vortex-studio.svg" width="166" height="30" alt="Vortex Studio" className="logo__label" />
                    <img src="/images/vortex-studio-light-bg.svg" width="166" height="30" alt="Vortex Studio" className="logo__label__light-bg" />
                </a>
                <button className="nav-button">
                    <div className="nav-button__wrapper">
                        <span className="nav-button__dot"></span>
                        <span className="nav-button__dot"></span>
                        <span className="nav-button__dot"></span>
                        <span className="nav-button__dot"></span>
                        <span className="nav-button__dot"></span>
                        <span className="nav-button__dot"></span>
                        <span className="nav-button__dot"></span>
                        <span className="nav-button__dot"></span>
                        <span className="nav-button__dot"></span>
                    </div>
                </button>
            </div>
        </header>
    )
}