import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaUsuario = ({ listarUsuario }) => {
    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Nombre</th>
                <th>Clave</th>
                <th>Vigencia</th>
                <th>IdTrabajador</th>
                <th>acciones</th>
            </tr>
        );
    }
    const TipoVigencia = (numero) =>{
        let vigencia = numero;
        if(vigencia===1){
            return "Vigente";
        }else{
            return "No Vigente";
        }
    }
    const celdas = () => {
        let numero = 0;
        return (
            listarUsuario.map((usuario) => (
                <tr key={usuario.id}>
                    <th>{numero += 1}</th>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.clave}</td>
                    <td>{TipoVigencia(usuario.vigencia)}</td>
                    <td>{usuario.idTrabajador}</td>
                    <td>
                        <Link to={"/editarusuario/" + usuario.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }
    return (
        <>
        <h3>Listado de Usuarios</h3>
        <Link to="/agregarusuario" className="btn btn-primary mb-2">
            Agregar
        </Link>
        <Table responsive>
            <thead className="bg-dark text-light">
                { encabezado() }
            </thead>
            <tbody>
                { celdas() }
            </tbody>
        </Table>
    </>
    )
}

export default TablaUsuario
