import Login from "./pages/Login";
import './App.css'; 
import Pratos from "./components/Pratos";
import Restaurantes from "./components/Restaurantes";

const App = () => (        
    <div className="App">  
        <div className="Cards">                  
            <Pratos />
            <Restaurantes />
        <Login />
        </div>      
    </div>   
);
export default App;