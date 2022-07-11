import React , {useRef , useEffect} from "react";
import './stolb.css'

export default function Stolb({max,min,val,nextval,date,flag}){
    let moneta = useRef(null);
    let canvas = useRef(null);
    useEffect(function(){
        //ставим монету на нужную высоту
            let percent=(val-min)/(max-min);
            let topmoneta=(258-(percent*258))+'px';
            moneta.current.style.top=topmoneta;
        //рисуем в канвасе красивую линию
            if(nextval!==undefined){
            let nextpercent=(nextval-min)/(max-min);

            let y1 = Math.floor(516 - percent*258*2);
            let y2 = Math.floor(516 -nextpercent*258*2);

            let ctx = canvas.current.getContext('2d');
            ctx.clearRect(0, 0, 70, 516);

            ctx.beginPath();
            ctx.moveTo(70, y1);
            ctx.lineTo(0, y2);
            ctx.lineWidth = 10;
            ctx.strokeStyle = '#740D00';
            ctx.stroke();
            ctx.closePath();
            }else{
                let ctx = canvas.current.getContext('2d');
                ctx.clearRect(0, 0, 70, 516);
            }
    })
    let tex=''+val;

    let str='';//пометки по оси х
    if (flag){
        let marr = date.match(/[0-9]{4}-([0-9]{2})-([0-9]{2})T([0-9]{2}):00:00/);
        let m = marr[1];
        let d = marr[2];
        let h = +marr[3];

        str=d+'.'+m+' '+h+'h'
    }

    return <div className={"stolbik "+(flag?'long':'')}>
            <canvas ref={canvas} width={70} height={516}></canvas>
            <div ref={moneta} className="moneta">
                <div className="trin"></div>
                <p>{tex[0]+','+tex[1]+tex[2]+tex[3]}</p>
            </div>
            <div className="label">{str}</div>
    </div>
}