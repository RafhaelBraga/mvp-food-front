import Card from "./components/layout/Card";
import Login from "./pages/Login";
import './App.css'; 

const App = () => {
    return (
        
        <div className="App">  
            <div className="Cards">        
                <Card 
                    titulo="teste" 
                    content="123456"
                    bgcolor="#090"/>
                <Card 
                    titulo="teste" 
                    content="123456"/>                
                <Card 
                    titulo="login" 
                    content="123456">
                </Card>
                    <Login />
            </div>      
        </div>   
    );
}
export default App;