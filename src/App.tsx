import Login from "./pages/Login";
import './App.css'; 
import PratosList from "./components/Pratos";
import RestaurantesList from "./components/Restaurantes";
import { 
    BrowserRouter as Router, 
    Routes,
    Route } from 'react-router-dom';

const App = () => (        
    <div className="App">  
        <div className="Cards">
        <Router>
            <Routes>  
                <Route path="/login" element={<Login/>}/>
                <Route path="/pratos" element={<PratosList/>}/>
                <Route path="/restaurantes"  element={<RestaurantesList/>}/> 
            </Routes>
        </Router>
        </div>      
    </div>   
);
export default App;