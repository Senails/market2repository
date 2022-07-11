import React from "react";
import './intercity.css';
import Footer from "../components/footer/Footer.jsx";
import Lpanel from "../components/lpanel/Lpanel";
import Header from "../components/header/Header";
import Block1 from "./blocks/block1/Block1";
import Block2 from "./blocks/block2/Block2";
import Select from "../components/select/Select";
import ContextSelect from "../components/select/ConextSelect";


export default function Intercity(){
    return <div className="intercity">
        <ContextSelect>
            <Header numactive={2}/>
            <Block1/>
            <Select/>
            <Block2/>
            <Footer/>
            <Lpanel/>
        </ContextSelect>
    </div>
}