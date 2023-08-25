import React from "react";
import { Lato } from 'next/font/google'

const latoBold = Lato({
    weight: '700',
    subsets: ['latin'],
});



const MainSetion = () => {
    return (
        <section className="mainSection">
            <div className="LeftConteiner">
                <div className="ConteinerTxtMain">
                    <h1 className={`titleTxtMain ${latoBold}`}>MINDFULMIND</h1>
                    <h2 className="txtPMain">
                        Encuentra la tranquilidad en tu día a día con MindfulMind,
                        la aplicación que te ayuda a ser más consciente y productivo
                    </h2>
                </div>
                <div className="conteinerIMGstore">
                    <img src="/img/playstore.png" />
                    <img src="/img/app-store.png" />
                </div>
            </div>
            <div className="RightConteiner">
                <img src="/img/mockups.png" />
            </div>
        </section>
    )
}

export default MainSetion;