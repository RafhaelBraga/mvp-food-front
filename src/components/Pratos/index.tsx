import React from "react";
import pratos from '../../mock-data/pratos-mock';
import Card from "../layout/Card";
import Formatter from "../../utils/formatter";
import './style.css';

const Pratos =  (props: any) => {

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
        <div  className="PratosContainer">
            <ul className="PratoList" style={{ listStyle: "none"}}>
                {list_pratos}
            </ul>
        </div>
    );
}
export default Pratos;