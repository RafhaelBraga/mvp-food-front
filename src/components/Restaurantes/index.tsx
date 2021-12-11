import React from "react";
import { Link } from "react-router-dom";
import restaurantes from '../../mock-data/restaurantes-mock';
import Card from "../layout/Card";
import './style.css';

const RestaurantesList =  (props: any) => {

    const list_restaurantes = restaurantes.map(restaurante => {
        return (
            <li key={restaurante.id}>
                <Card titulo = {restaurante.nome} bgcolor="blue">
                    {restaurante.id} - {restaurante.bairro} - {restaurante.logradouro} - {restaurante.numero} - {restaurante.telefone}
                </Card>
            </li> 
        );
    });

    return (
        <div>
            <div  className="RestaurantesContainer">
                <ul className="RestaurantesList" style={{ listStyle: "none"}}>
                    {list_restaurantes}
                </ul>
            </div>
            <Link to="/login">
                <button>Sair</button>
            </Link>
        </div>
    );
}
export default RestaurantesList;