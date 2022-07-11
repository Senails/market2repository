import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './block3.css';
import Alert from '../../../components/alert/Alert';

export default function Block3(){
    let [state,setstate]=useState(false);

    return <div className="block3">
        <div className="blockk">
            <div className='mapa'></div>
            <div className='shadow'></div>
            <div className='box'>
                <div className="city"></div>
                <div className="city"></div>
                <div className="city"></div>
                <div className="city"></div>
                <div className="city"></div>
                <div className="city"></div>
                <div className="strelki"></div>
                <Link className="ancer" to="/blackmarket"></Link>
            </div>
        </div>
        <div className="poloska">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="dshadow">
            <div></div>
            <div></div>
        </div>
        {state? <Alert setalert={setstate}/>:''}
    </div>
}