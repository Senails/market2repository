import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Alert from '../alert/Alert.jsx'
import './header.css';

export default function Header({numactive}){
    let [state,setState] = useState(false);
    let [alert,setalert] = useState(false);

    return <header className={state? 'active':''}>
        <div className="mobilemenu">
            <div className="button" onClick={()=>setState(!state)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="contei">
                <div className={numactive===1?'active':''}><Link to="/blackmarket"></Link></div>
                <div className={numactive===2?'active':''}><Link to="/intercity"></Link></div>
                <div onClick={()=>setalert(true)} className={numactive===3?'active':''}><a></a></div>
                <div onClick={()=>setalert(true)} className={numactive===4?'active':''}><a></a></div>
                <div onClick={()=>setalert(true)} className={numactive===5?'active':''}><a></a></div>
                <div><a href="https://www.albion-online-data.com/" target="_blank"></a></div>
            </div>
        </div>
        <Link to="/" className="nameheader">albion.market II</Link>
        <div className="corona"></div>
        <nav>
            <div className={numactive===1?'active':''}><Link to="/blackmarket"></Link></div>
            <div className={numactive===2?'active':''}><Link to="/intercity"></Link></div>
            <div onClick={()=>setalert(true)} className={numactive===3?'active':''}><a></a></div>
            <div onClick={()=>setalert(true)} className={numactive===4?'active':''}><a></a></div>
            <div onClick={()=>setalert(true)} className={numactive===5?'active':''}><a></a></div>
            <div>
                <a href="https://github.com//broderickhyman/albiondata-client/releases/download/0.1.7/albiondata-client-amd64-installer.exe" target="_blank"></a>
                <a href="https://www.albion-online-data.com/"></a>
            </div>
        </nav>
        {alert? <Alert setalert={setalert}/>:''}
    </header>
}