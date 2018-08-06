import React, { Component } from 'react';
import './styles/PokeList.css';
import PokeCell from './PokeCell';

const PokeList = () =>{
    return(
        <section className="poke-list">
            <PokeCell/>
            <PokeCell/>
            <PokeCell/>
            <PokeCell/>
        </section>
    )
}
export default PokeList;