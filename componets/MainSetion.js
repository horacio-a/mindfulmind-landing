import React from "react";
import { Lato } from 'next/font/google'
import { MdArrowForward } from "react-icons/md";

const latoBold = Lato({
    weight: '700',
    subsets: ['latin'],
});



const MainSetion = () => {
    return (
        <section className="mainSection">
            <div className={`MainTitle ${latoBold.className}`}>
                Tu rutina, tu recordatorio
                <br />y tu vida.
            </div>
            <p className="MainSubTitle">
                Encuentra la tranquilidad en tu día a día con MindfulMind, la aplicación que te ayuda a ser más consciente y productivo
            </p>
            <div className="conteinerButton">
                <a href="/download" className="buttonDownload">
                    <div className={`txtButtonDownload ${latoBold.className}`}>
                        Usar MindfulMind
                        <MdArrowForward size={20} />
                    </div>

                </a>


            </div>
        </section>
    )
}

export default MainSetion;