import { useEffect, useState } from "react";
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

    useEffect (() => {
        getPratos();
        
        setLoading(false);
    })
    const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')!) : '';

    const getPratos = async () => {
        const response = await axios.get(`http://localhost:8080/mvp/pratos/busca-pratos-por-restaurante/`+restaurante,
        {                        
            withCredentials: true,
            headers: { 
            'Authorization': token.token, 
            }
        });
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
                    Descrição: {prato.descricao} <br />
                    Preço: {Formatter.currencyFormat(prato.preco)}
                </Card>
            </li> 
        );
    });

    return (
        <div>
            <div  className="PratosContainer">
                <ul className="PratoList" style={{ listStyle: "none"}}>
                    {list_pratos}
                </ul>
            </div>
            <Link to="/restaurantes">
                <button className="SairButton">Voltar</button>
            </Link>
        </div>
    );
}
export default PratosList;