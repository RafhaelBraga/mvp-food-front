import React from "react";
import restaurantes from '../../mock-data/restaurantes-mock';
import Card from "../layout/Card";
import './style.css';

const Restaurantes =  (props: any) => {

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
        <div  className="RestaurantesContainer">
            <ul className="RestaurantesList" style={{ listStyle: "none"}}>
                {list_restaurantes}
            </ul>
        </div>
    );
}
export default Restaurantes;