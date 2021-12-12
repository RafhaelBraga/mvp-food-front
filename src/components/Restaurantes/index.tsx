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
    
    const [filter, setFilter] = useState('');

    useEffect (() => {
        getRestaurantes();
        
        setLoading(false);
    })

    const getRestaurantes = async () => {
        const response = await axios.get(`http://localhost:8080/mvp/restaurantes/busca-restaurantes`);
        console.log(response.data);
        setRestaurantes(response.data);
        return response.data;
                     
    }
    
    if(loading) {
        return <h1>loading...</h1>;
    } 

    const list_restaurantes = restaurantes
    .map(restaurante => {
        let pratosFilter = restaurante.pratos.map( p => {
            return (p.nome.search(filter) >= 0 || p.descricao.search(filter) >= 0 );
        })
        
        return (
            restaurante.nome.search(filter) >= 0 ||
             pratosFilter[0] ||
            filter.length === 0
        ) ? 
        (
            <li key={restaurante.id}>                
                <Link to={`/pratos/${restaurante.id}`}>
                    <Card titulo = {restaurante.nome} bgcolor="blue">
                        <div>
                            <strong>Endereço:</strong><br />
                            <span>
                            {restaurante.logradouro} <br />
                            Nº: {restaurante.numero} <br />
                            Bairro: {restaurante.bairro} <br />
                            Telefone: {restaurante.telefone}
                            </span> 
                        </div>
                    </Card>
                </Link>
            </li> 
        ) : '';
    });

    return (
        <div>
            <div className="FilterContainer">
                <label>Buscar</label>
                <input type="text" className="FilterInput" name="filter" value={filter} onChange={e => setFilter(e.target.value)} maxLength={20}></input>
            </div>
            <div  className="RestaurantesContainer">
                <ul className="RestaurantesList" style={{ listStyle: "none"}}>
                    {list_restaurantes}
                </ul>
            </div>
            <Link to="/login">
                <button onClick={handleLogout} className="VoltarButton">Sair</button>
            </Link>
        </div>
    );
}
export default RestaurantesList;