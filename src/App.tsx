import NotFound from "./pages/NotFound";
import PratosList from "./components/Pratos";
import RestaurantesList from "./components/Restaurantes";
import { 
    BrowserRouter as Router, 
    Routes,
    Route,
    } from 'react-router-dom';
import LoginForm from "./components/Login";
import { AuthProvider} from "./components/Auth/AuthProvider";
import RequireAuth from "./components/Auth/RequireAuth";

const App = () => (        
    <div>  
        <AuthProvider>
            <Router>
                    <Routes>    
                        <Route path="/login" element={<LoginForm/>}/>                
                        <Route path="/" element={<LoginForm/>}/>                    
                        <Route path="/pratos/:restaurante" element={<RequireAuth><PratosList/></RequireAuth>}/>
                        <Route path="/restaurantes"  element={<RequireAuth><RestaurantesList/></RequireAuth>}/>                     
                        <Route path="*" element={<NotFound />} />
                    </Routes>
            </Router>
        </AuthProvider>      
    </div>   
);
export default App;