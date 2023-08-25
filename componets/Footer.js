import React from "react";
import { Lato } from 'next/font/google'

const latoBold = Lato({
    weight: '700',
    subsets: ['latin'],
});



const Footer = () => {
    return (
        <footer>
            <div className="topPartFooter">
                <img src="/img/xl black.png" />
            </div>
            <div className="Powerbytext">
                
            </div>
            {/* <div className="bottomPartFooter">
                <img src="/img/AppStoreXl.png" />
                <img src="/img/PlaystoreXL.png" />

            </div> */}

        </footer>
    )
}

export default Footer;