import React from "react";
import './alert.css'


export default function Alert({setalert}){

    return <div className="alert">
        <div className='massage'>
            <div className="worker"></div>
            <p>Эта часть сайта пока не реализована</p>
            <div className="crestik" onClick={()=>setalert(false)}>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
}