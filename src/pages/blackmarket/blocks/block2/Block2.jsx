import React, {useContext , useEffect} from "react";
import './block2.css'
import arr from '../../../components/forapi/Arrai.jsx'
import {Context} from "./../../../components/select/ConextSelect";
import { useState } from "react";

export default function Block2(){
    let [state,setstate]=useContext(Context);






    console.log([state,setstate]);


    return <div className="block22">

        <div className="conteiner">{/* тут контент блока */}
            {(state!=0)? state:''}
        </div>

        <div className="poloska">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="poloska">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
}