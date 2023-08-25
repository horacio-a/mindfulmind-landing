import React from "react";
import { Lato } from 'next/font/google'

const latoBold = Lato({
    weight: '700',
    subsets: ['latin'],
});



const UnitSecondSetion = ({ Title, Text1, Text2, img }) => {
    return (
        <div className="conteinerInfoApp">
            <h3 className={`TitleInfoApp ${latoBold}`}>{Title}</h3>
            <img src={img} className="imgInfoApp" />
            <div className="txtInfoApp">{Text1}</div>
            <div className="txtInfoApp">{Text2}</div>
        </div>
    )
}

export default UnitSecondSetion;