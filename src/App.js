import { BrowserRouter , Link, Route, Switch } from "react-router-dom";
import Home from "./components/login/Home";
import IniciarSesion from "./components/login/IniciarSesion";
import RegistroUsuario from "./components/login/RegistroUsuario";
import CrearEvento from "./components/eventos/CrearEvento";
import DetalleEvento from "./components/eventos/DetalleEvento";
import EditarEvento from "./components/eventos/EditarEvento";
import DetalleCompras from "./components/compras/DetalleCompras";
import Pagar from "./components/compras/Pagar";
import RegistroCompras from "./components/compras/RegistroCompras";
import EditarPerfilUsuario from "./components/usuarios/EditarPerfilUsuario";
import PerfilAdministrador from "./components/usuarios/PerfilAdministrador";
import PerfilUsuario from "./components/usuarios/PerfilUsuario";


function App() {
  return (
    <div>
      <BrowserRouter>

        <Switch>
         
          <Route exact path="/" component={IniciarSesion} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/registrousuario" component={RegistroUsuario} />
        
          <Route exact path="/crearevento" component={CrearEvento} />
          <Route exact path="/detalleevento" component={DetalleEvento} />
          <Route exact path="/editarevento" component={EditarEvento} />
        
          <Route exact path="/detallecompras" component={DetalleCompras} />
          <Route exact path="/pagar" component={Pagar} />
          <Route exact path="/registrocompras" component={RegistroCompras} />
          
          <Route exact path="/editarperfilusuario" component={EditarPerfilUsuario} />
          <Route exact path="/perfiladministrador" component={PerfilAdministrador} />
          <Route exact path="/perfilusuario" component={PerfilUsuario} />
      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
