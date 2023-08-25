import React from "react";
import { Lato } from 'next/font/google'

const latoBold = Lato({
    weight: '700',
    subsets: ['latin'],
});



const Header = () => {
    return (
        <header>
            <a href="/" className="conteinerLogoSheader">
                <img className="logoSHeader" src="img/xs black.png" />
            </a>
            <a href="/" className='conteinerTxtHeader'>
                <h1 className={`TxtHeader ${latoBold.className}`}>
                    MINDFULMIND
                </h1>

            </a>
        </header>
    )
}

export default Header;