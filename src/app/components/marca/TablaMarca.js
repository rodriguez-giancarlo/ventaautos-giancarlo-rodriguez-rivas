import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaMarca = ({ listarMarca }) => {
    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Nombre</th>
                <th>acciones</th>
            </tr>
        );
    }
    const celdas = () => {
        let numero = 0;
        return (
            listarMarca.map((marca) => (
                <tr key={marca.id}>
                    <th>{numero += 1}</th>
                    <td>{marca.nombre}</td>
                    <td>
                        <Link to={"/editarmarca/" + marca.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }
    return (
        <>
        <h3>Listado de Marcas</h3>
        <Link to="/agregarmarca" className="btn btn-primary mb-2">
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

export default TablaMarca
