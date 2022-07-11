import React from "react";
import './blackmarket.css';
import Footer from "../components/footer/Footer.jsx";
import Lpanel from "../components/lpanel/Lpanel";
import Header from "../components/header/Header";
import Block1 from "./blocks/block1/Block1";
import Block2 from "./blocks/block2/Block2";
import Select from "../components/select/Select";
import ContextSelect from "../components/select/ConextSelect";



export default function Blackmarket(){
    return <div className='blackmarket'>
        <ContextSelect>
            <Header numactive={1}/>
            <Block1/>
            <Select/>
            <Block2/>
            <Footer/>
            <Lpanel/>
        </ContextSelect>
    </div>
}