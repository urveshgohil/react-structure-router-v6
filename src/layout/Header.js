import React, { useState } from 'react'
import header from '../scss/component/header.module.scss';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    const checkScroll = () => {
        if (window.pageYOffset >= 10) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    window.addEventListener("scroll", checkScroll);

    return (
        <>
            <header className={`${header.section} justify-content-center${scroll ? ` ${header.sticky}` : ''}`}>
                <div className={`${header.block} d-flex flex-wrap justify-content-center`}>
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center">
                            Header
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;