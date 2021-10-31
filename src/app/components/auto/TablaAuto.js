import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaAuto = ({listaAuto}) => {
    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Color</th>           
                <th>idMarca</th>
                <th>Acciones</th>
            </tr>
        );
    }
    const celdas = () => {
        let numero = 0;
        return (
            listaAuto.map((Auto) => (
                <tr key={Auto.id}>
                    <th>{numero += 1}</th>
                    <td>{Auto.modelo}</td>
                    <td>{Auto.placa}</td>
                    <td>{Auto.color}</td>
                    <td>{Auto.idMarca}</td>
                    <td>
                        <Link to={"/editarAuto/" + Auto.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }
    return (
        <>
            <h3>Listado de Autos</h3>
            <Link to="/agregarAuto" className="btn btn-primary mb-2">
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

export default TablaAuto
