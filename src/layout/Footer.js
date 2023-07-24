import React, { useState, useEffect } from 'react';
import footer from '../scss/component/footer.module.scss';

const Footer = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint1024 = 1024;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    })
    return (
        <>
            <footer className={`${footer.section} position-relative`}>
                <div className={`${footer.bottom} d-flex flex-wrap w-100`}>
                    <div className="container text-center">
                        Footer
                        © - {new Date().getFullYear()}.
                    </div>
                </div>
                {width <= breakpoint1024 && <div className={`${footer.menu}`}>Footer
                </div>}
            </footer>
        </>
    )
}
export default Footer;