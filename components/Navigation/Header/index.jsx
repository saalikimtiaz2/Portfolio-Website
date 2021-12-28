import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from '../../SvgIcons'

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
        <div className={`fixed xs:px-6 lg:px-20 py-2 z-50 w-screen ${navbar ? 'shadow-xl bg-white' : ''}`}>
            <Link href='/' className='cursor-pointer'><Logo height='52px' fill='#f9c519' /></Link>
        </div>
    )
}

export default Header
