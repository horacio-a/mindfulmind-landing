import React from "react";
import { Lato } from 'next/font/google'
import UnitSecondSetion from "../UnitSecondSetion";

const latoBold = Lato({
    weight: '700',
    subsets: ['latin'],
});



const SecondSetion = () => {
    return (
        <section className="SecondSection">
            <UnitSecondSetion
                Title={'ENTIENDE'}
                Text1={'Iras entendiendo como mejorar y en que arreas mejorar.'}
                Text2={'Analizar y entender en que arreas quieres mejorar es muy importante para progresar.'}
                img={'/img/idea.png'}
            />
            <UnitSecondSetion
                Title={'ORDENA'}
                Text1={'Quizás ya sabes donde tienes que focalizarte pero es importante dar el siguiente paso.'}
                Text2={'allí vamos a darte una mano.'}
                img={'/img/lista.png'}
            />
            <UnitSecondSetion
                Title={'GESTIONA'}
                Text1={'Iterar es muy importante para mejorar.'}
                Text2={'Ajustando, eliminado y agregando tareas y objetivos'}
                img={'/img/proceso.png'}
            />
            <UnitSecondSetion
                Title={'DISFRUTAR'}
                Text1={'Hay que recordar lo importante siempre.'}
                Text2={'No hay nada mejor que obtener mas tiempo para realizar lo que mas te guste.'}
                img={'/img/disfrutar.png'}
            />

        </section>
    )
}

export default SecondSetion;