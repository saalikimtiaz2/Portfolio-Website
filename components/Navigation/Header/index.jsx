import { useState, useEffect } from 'react';

function Header() {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener('scroll', changeBackground);
    }, []);
    return (
        <div className={`sticky left-0 top-0 xs:px-6 lg:px-20 py-2 z-50  ${navbar ? 'shadow-xl bg-white' : ''}`}>
            <h1 className='text-24 font-semibold text-primary'>Salik <span className='text-black font-light'>Imtiaz</span></h1>
        </div>
    )
}

export default Header
