import React from "react";
import { Lato } from 'next/font/google'

const latoBold = Lato({
    weight: '700',
    subsets: ['latin'],
});

const lato = Lato({
    weight: '400',
    subsets: ['latin'],
});




const ContactoSetion = () => {

    return (
        <section className="ContactoSection">
            <h2 className="ContactoTitleM">Envíale un mensaje al equipo de</h2>
            <h1 className="ContactoTitleL">MINDFULMIND</h1>

            <div className="conteinerInputContacto" >
                <div className="rowContacto doble">
                    <div className="UnitInput">
                        <label className="contacto">Tu nombre</label>
                        <input type={'text'} className='inputContacto' placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="UnitInput">
                        <label className="contacto" >Tu Email</label>
                        <input type={'text'} className='inputContacto' placeholder="Ingresa tu Email" />
                    </div>
                </div>
                <div className="rowContacto">
                    <div className="unitTextarea">
                        <label className="contacto" >Tu mensaje</label>
                        <textarea className={`textareaContacto ${lato.className}`} style={{ fontFamily: 'inherit' }} placeholder="Escribe tu mensaje"></textarea>
                    </div>

                </div>

                <div className="buttonSend">Enviar</div>

            </div>
        </section>
    )
}

export default ContactoSetion;