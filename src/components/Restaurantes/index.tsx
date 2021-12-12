import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import Card from "../layout/Card";
import './style.css';
import Restaurantes from "../../models/restaurantes";

const RestaurantesList =  (props: any) => {
    
    const restinit: Restaurantes[] = [];

    const { handleLogout } = useContext(AuthContext);    
    const [loading, setLoading] = useState(true);     
    const [restaurantes, setRestaurantes] = useState(restinit);

    useEffect (() => {
        getRestaurantes();
        
        setLoading(false);
    })

    const getRestaurantes = async () => {
        const response = await axios.get(`http://localhost:8080/mvp/restaurantes/busca-restaurantes`);
        setRestaurantes(response.data);
        return response.data;
                     
    }
    
    if(loading) {
        return <h1>loading...</h1>;
    } 

    const list_restaurantes = restaurantes.map(restaurante => {
        return (
            <li key={restaurante.id}>                
                <Link to={`/pratos/${restaurante.id}`}>
                    <Card titulo = {restaurante.nome} bgcolor="blue">
                        {restaurante.id} - {restaurante.bairro} - {restaurante.logradouro} - {restaurante.numero} - {restaurante.telefone}
                    </Card>
                </Link>
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
                <button onClick={handleLogout}>Sair</button>
            </Link>
        </div>
    );
}
export default RestaurantesList;