import React from "react";
import { Lato } from 'next/font/google'
import { MdArrowForward } from "react-icons/md";
import '../app/globals.css'
import Header from '../componets/Header'

const latoBold = Lato({
    weight: '700',
    subsets: ['latin'],
});

const lato = Lato({
    weight: '400',
    subsets: ['latin'],
});

const Download = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
            <Header />

            <section className="download">
                <div className={`MainTitle ${latoBold.className}`}>
                    Descargada
                    <br />o desde cualquier navegador
                </div>
                <p className={`MainSubTitle ${lato.className}`}>
                    Mindfulmind va a estar donde tu quieras
                </p>
                <p className={`warningMsg ${lato.className}`}>
                    Actualmente por razones economicas solo contamos con la aplicacion como .apk
                </p>
                <div className="conteinerButton">
                    <a href="/mindfulmind.apk" download="mindfulmind.apk" className="buttonDownload">
                        <div className={`txtButtonDownload ${latoBold.className}`}>
                            Descargar
                            <MdArrowForward size={20} />
                        </div>

                    </a>
                    <a href="https://app.mindfulmind.com.ar" className="buttonDownload">
                        <div className={`txtButtonDownload ${latoBold.className}`}>
                            Usar en la web
                            <MdArrowForward size={20} />
                        </div>

                    </a>

                </div>
            </section>
        </div>
    )
}

export default Download