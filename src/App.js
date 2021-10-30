import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BarraNavegacion from './app/common/BarraNavegacion';
import 'bootstrap/dist/css/bootstrap.min.css';

// trabajador
import VistaTrabajador from './app/pages/trabajador/VistaTrabajador';
import AgregarTrabajador from './app/pages/trabajador/AgregarTrabajador';
import EditarTrabajador from './app/pages/trabajador/EditarTrabajador';

//Usuario
import VistaUsuario from './app/pages/usuario/VistaUsuario';
import AgregarUsuario from './app/pages/usuario/AgregarUsuario';
import EditarUsuario from './app/pages/usuario/EditarUsuario';

//Marca
import VistaMarca from './app/pages/marca/VistaMarca';
import AgregarMarca from './app/pages/marca/AgregarMarca';


function App() {
  return (
    <BrowserRouter>
    <BarraNavegacion />
    <div className="container mt-4">
        <Switch>
            {/* Trabajador */}
            <Route path="/trabajador" exact><VistaTrabajador/></Route>
            <Route path="/agregartrabajador" exact><AgregarTrabajador/></Route>
            <Route path="/editarTrabajador/:id" exact><EditarTrabajador/></Route>
            {/* Usaurio */}
            <Route path="/usuario" exact><VistaUsuario/></Route>
            <Route path="/agregarusuario" exact><AgregarUsuario/></Route>
            <Route path="/editarusuario/:id" exact><EditarUsuario/></Route>
            {/* Marca */}
            <Route path="/marca" exact><VistaMarca/></Route>
            <Route path="/agregarmarca" exact><AgregarMarca/></Route>

            <Redirect to="/inicio"></Redirect>
        </Switch>
    </div>
</BrowserRouter>
  );
}

export default App;
