import React from "react";
import { Link } from 'react-router-dom';
import './nopage.css';

export default function Nopage(){
    return <div className="nopage">
        <div className="soobshenye">
            <p>Этой страницы не существует :(</p>
            <Link to='/'>Вернуться на главную?</Link>
        </div>
    </div>
}