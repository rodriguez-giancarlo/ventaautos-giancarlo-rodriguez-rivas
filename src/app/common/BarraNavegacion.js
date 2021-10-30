import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './BarraNavegacion.css';

const BarraNavegacion = () => {
    return (
        <>
            <Navbar collapseOnSelect  bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/inicio" className="container-title">Venta de Autos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/trabajador" className="opt-barra">Trabajador</NavLink>
                        <NavLink to="/usuario" className="opt-barra">Usuario</NavLink>
                        <NavLink to="/marca" className="opt-barra">Marca</NavLink>
                        <NavLink to="/auto" className="opt-barra">Auto</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default BarraNavegacion;