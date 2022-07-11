import React, { useState , useContext } from "react";
import {Context} from "./ConextSelect";
import './select.css';

export default function Select(){
    let [state,setstate]=useContext(Context);

    return <div className="select">
        <div className="desktop">
            <div className="conteiner">
                <div className={"seld "+((state===1)? 'active':'')} onClick={()=>setstate(1)}>
                    <div className="boxx card1"><div className="shado"></div></div>
                </div>
                <div className={"seld "+((state===2)? 'active':'')} onClick={()=>setstate(2)}>
                    <div className="boxx card2"><div className="shado"></div></div>
                </div>
                <div className={"seld "+((state===3)? 'active':'')} onClick={()=>setstate(3)}>
                    <div className="boxx card3"><div className="shado"></div></div>
                </div>
                <div className={"seld "+((state===4)? 'active':'')} onClick={()=>setstate(4)}>
                    <div className="boxx card4"><div className="shado"></div></div>
                </div>
                <div className={"seld "+((state===5)? 'active':'')} onClick={()=>setstate(5)}>
                    <div className="boxx card5"><div className="shado"></div></div>
                </div>
            </div>
        </div>
        <div className="mobile">
            <div className="contei">
                <div className={"selm "+((state===1)? 'active':'')} onClick={()=>setstate(1)}>
                    <div className="cont con1"><div className="shad"></div></div>
                </div>
                <div className={"selm "+((state===2)? 'active':'')} onClick={()=>setstate(2)}>
                    <div className="cont con2"><div className="shad"></div></div>
                </div>
                <div className={"selm "+((state===3)? 'active':'')} onClick={()=>setstate(3)}>
                    <div className="cont con3"><div className="shad"></div></div>
                </div>
                <div className={"selm "+((state===4)? 'active':'')} onClick={()=>setstate(4)}>
                    <div className="cont con4"><div className="shad"></div></div>
                </div>
                <div className={"selm "+((state===5)? 'active':'')} onClick={()=>setstate(5)}>
                    <div className="cont con5"><div className="shad"></div></div>
                </div>
            </div>
            <div className="shad"></div>
        </div>
    </div>
}