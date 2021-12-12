import React, { useContext, useEffect, useState } from "react";
import pratos from '../../mock-data/pratos-mock';
import Card from "../layout/Card";
import Formatter from "../../utils/formatter";
import './style.css';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Pratos from "../../models/pratos";

const PratosList =  (props: any) => {

    let { restaurante } = useParams();
    const pratosinit: Pratos[] = [];
 
    const [loading, setLoading] = useState(true);     
    const [pratos, setPratos] = useState(pratosinit);

    let rest;
    useEffect (() => {
        rest = getPratos();
        
        setLoading(false);
    })

    const getPratos = async () => {
        const response = await axios.get(`http://localhost:8080/mvp/pratos/busca-pratos-por-restaurante/`+restaurante);
        setPratos(response.data);
        return response.data;
                     
    }
    
    if(loading) {
        return <h1>loading...</h1>;
    } 

    const list_pratos = pratos.map(prato => {
        return (
            <li key={prato.id}>
                <Card titulo = {prato.nome}>
                    {prato.id} - {prato.descricao} - {Formatter.currencyFormat(prato.preco)}
                </Card>
            </li> 
        );
    });

    return (
        <div>
            <Link to="/restaurantes">
                <button>Voltar</button>
            </Link>
            <div  className="PratosContainer">
                <ul className="PratoList" style={{ listStyle: "none"}}>
                    {list_pratos}
                </ul>
            </div>
        </div>
    );
}
export default PratosList;