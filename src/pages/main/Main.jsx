import React from "react";
import './main.css';
import Header from "../components/header/Header";
import Block1 from './blocks/block1/Block1.jsx';
import Block2 from './blocks/block2/Block2.jsx';
import Block3 from './blocks/block3/Block3.jsx';
import Block4 from './blocks/block4/Block4.jsx';
import Footer from "../components/footer/Footer.jsx";
import Lpanel from "../components/lpanel/Lpanel";


export default function main(){
    return <div className="main">
        <Header/>
        <Block1/>
        <Block2/>
        <Block3/>
        <Block4/>
        <Footer/>
        <Lpanel/>
    </div>
}