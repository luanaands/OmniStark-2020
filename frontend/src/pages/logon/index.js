import React from 'react';
import { FiLogIn }  from 'react-icons/fi';

import './styles.css';

import Logoimg from '../../assets/download.svg';
import Heroesimg from '../../assets/heroes.png';


export default function Logon(){
return(
<div className="logon-container">
    <section className="form">
        <img src={Logoimg} alt="be the hero"/>
        <form>
        <h1>Faça seu login</h1> 

        <input placeholder="Seu ID"/>   
        <button className="button" type="submit">Entrar</button>

        <a href="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro 
        </a>
        </form> 
    </section> 
    <img src={Heroesimg} alt="Heroes"/>
</div>);

}
