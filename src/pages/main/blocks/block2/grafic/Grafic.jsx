import React, {useState , useRef , useEffect} from "react";
import './grafic.css';
import Stolb from './stolb/Stolb.jsx'


let kurs = '';
let vgran='';
let ngran='';

export default function Grafic(){
    let [select,setselect]=useState(24);
    let [arr,setarr]=useState([]);
    let arrprice = useRef(null);
    let graf = useRef(null);


    useEffect(function(){
        let box = graf.current;
        box.addEventListener('mousedown', myfunc);
        function myfunc(event){
            if (event.button === 0){
                let str = box.style.transform;
                let num;
                if (str !== '') {
                    num = +str.match(/translateX\((-?[0-9]+[.0-9]*)px\)/)[1];
                } else {
                    num = 0;
                }
                let x1 = event.pageX;

                let minw = box.parentElement.offsetWidth;
                let width = box.offsetWidth - minw;

                window.addEventListener('mousemove', func1)
                function func1(e) {
                    let x2 = e.pageX; //новая кордината икса
                    let izm = x2 - x1; // смещение по иксу
                    let newsmes = num + izm; // новое смещение по иксу
                    if (newsmes <= -minw/4) {
                        box.style.transform = `translateX(${-minw/4}px)`;
                    } else if (newsmes >= width+50) {
                        box.style.transform = `translateX(${width+50}px)`;
                    } else {
                        box.style.transform = `translateX(${newsmes}px)`;
                    }
                }
                window.addEventListener('mouseup', function func2() {
                    if (event.button === 0) {
                        this.window.removeEventListener('mouseup', func2);
                        this.window.removeEventListener('mousemove', func1);
                    }
                })
            }
        }
        box.addEventListener('touchstart', myfuncmobile);
        function myfuncmobile(e){
                let str = box.style.transform;
                let num;
                if (str !== '') {
                    num = +str.match(/translateX\((-?[0-9]+[.0-9]*)px\)/)[1];
                } else {
                    num = 0;
                }
                let x1 = e.touches[0].pageX;

                let minw = box.parentElement.offsetWidth;
                let width = box.offsetWidth - minw;

                window.addEventListener('touchmove', func1)
                function func1(e) {
                    let x2 = e.touches[0].pageX; //новая кордината икса
                    let izm = x2 - x1; // смещение по иксу
                    let newsmes = num + izm; // новое смещение по иксу
                    if (newsmes <= -minw/4) {
                        box.style.transform = `translateX(${-minw/4}px)`;
                    } else if (newsmes >= width+50) {
                        box.style.transform = `translateX(${width+50}px)`;
                    } else {
                        box.style.transform = `translateX(${newsmes}px)`;
                    }
                }
                window.addEventListener('touchend', function func2() {
                    window.removeEventListener('touchend', func2);
                    window.removeEventListener('touchmove', func1);
                })
            
        }
        return ()=>{
            box.removeEventListener('mousedown',myfunc);
            box.removeEventListener('touchstart', myfuncmobile);
        }
    },[])
    useEffect(()=>{
        graf.current.style.transform = `translateX(-20px)`;
    },[select])
    useEffect(function(){
        //один раз грузим апи в начале загрузки страницы
        // и первый рендер 
        tyanapi()
        async function tyanapi(){
            let response = await fetch('https://www.albion-online-data.com/api/v2/stats/gold.json?count=900');
            let obj = await response.json();
            let arri = obj.map(elem=>elem.price);
            let dati = obj.map(elem=>elem.timestamp);
            arrprice.current=[arri,dati];
            renderinfo(arrprice.current[0],arrprice.current[1],24);
            let text =''+arrprice.current[0][0];
            kurs = text[0]+','+text[1]+text[2]+text[3];
        }
    },[]);
  
    function changeselect(num){
        setselect(num);
        renderinfo(arrprice.current[0],arrprice.current[1],num);
    }

    function renderinfo(arr,arrdate,selec){
        let narr = newarr(arr,selec);
        let ndat = newarr(arrdate,selec);

        let min = findmin(narr);
        let max = findmax(narr);
        let range = max-min;
        let grafrange = range*1.8;
        let grafmin=min-((grafrange-range)/2);
        let grafmax=max+((grafrange-range)/2);
        { //унесем значения верхних и нижних границ для графика
        let tex1=''+grafmax;
        let tex2=''+grafmin;
        vgran=tex1[0]+','+tex1[1]+tex1[2]+tex1[3];
        ngran=tex2[0]+','+tex2[1]+tex2[2]+tex2[3];
        }

        let varvar;
        if (selec===1){
            varvar=6;
        }if (selec===6){
            varvar=4;
        }if (selec===24){
            varvar=7;
        }


        let z=[];
        for(let i=0;  i <= narr.length-1; i++){
            let flag;
            if ((i+1)%varvar ===0) flag=true; else flag=false;
            z.push(<Stolb max={grafmax} min={grafmin} val={narr[i]} nextval={narr[i+1]} date={ndat[i]} flag={flag} key={i}/>)
        }
        setarr(z);
        function  findmax(arr) {
            let num = arr[0];
            for(let elem of arr){
                if (elem > num){
                    num = elem;
                };
            };
            return num;
        }
        function  findmin(arr) {
            let num = arr[0];
            for(let elem of arr){
                if (elem < num){
                    num = elem;
                };
            };
            return num;
        }
        function newarr(arr , selec) {
            let newarr=[];
            if (selec===1){
                newarr = arr;
            }else if (selec===6){
                for(let i=0; i<(arr.length-1);i+=6){
                    newarr.push(arr[i]);
                }
            }else if (selec===24){
                for(let i=0; i<(arr.length-1);i+=24){
                    newarr.push(arr[i]);
                }
            }

            if (newarr.length>200){
                newarr=newarr.slice(0,200);
            }

            return newarr;
        }
    }

    return <div className='grafic'>
        <div className="graff">
            <div className="contei">
                <div ref={graf} className="grafi">
                    {arr}
                </div>
            </div>
            <div className="razmetca">
                <div className="lstrelka"></div>
                <div className="rstrelka"></div>
                <div className="vline1"></div>
                <div className="vline2"></div>
                <div className="gline1"></div>
                <div className="gline2"></div>
            </div>
            <div className="vgran">
                <p>{vgran}</p>
                <div className="silv"></div>
            </div>
            <div className="ngran">
                <p>{ngran}</p>
                <div className="silv"></div>
            </div>
        </div>
        <div className="kurs">
            <div className="moni"></div>
            <p>=</p>
            <span>{kurs}</span>
            <div className="silver"></div>
        </div>
        <div className="selector">
            <div className={'variel '+((select===1)?'active':'')} onClick={()=>changeselect(1)}>1</div>
            <div className={'variel '+((select===6)?'active':'')} onClick={()=>changeselect(6)}>6</div>
            <div className={'variel '+((select===24)?'active':'')} onClick={()=>changeselect(24)}>24</div>
        </div>
</div>
}