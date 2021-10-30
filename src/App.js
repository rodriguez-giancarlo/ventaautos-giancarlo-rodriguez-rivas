import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BarraNavegacion from './app/common/BarraNavegacion';
import 'bootstrap/dist/css/bootstrap.min.css';

// trabajador
import VistaTrabajador from './app/pages/trabajador/VistaTrabajador';
import AgregarTrabajador from './app/pages/trabajador/AgregarTrabajador';
import EditarTrabajador from './app/pages/trabajador/EditarTrabajador';
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

            <Redirect to="/inicio"></Redirect>
        </Switch>
    </div>
</BrowserRouter>
  );
}

export default App;
