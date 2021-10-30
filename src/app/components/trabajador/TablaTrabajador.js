import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaTrabajador = ({listaTrabajador}) => {
    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>tipo Doc</th>
                <th>num. documento</th>
                <th>correo</th>
                <th>opciones</th>
            </tr>
        );
    }
    const celdas = () => {
        let numero=0;
        return (            
            listaTrabajador.map((trabajador) => (
                <tr key={trabajador.id}>
                    <th>{numero+=1}</th>
                    <td>{trabajador.nombres}</td>
                    <td>{trabajador.apellidoPaterno} {trabajador.apellidoPaterno}</td>
                    <td>{trabajador.tipoDocumento}</td>
                    <td>{trabajador.numeroDocumento}</td>
                    <td>{trabajador.correo}</td>
                    <td>
                        <Link to={"/editarTrabajador/" + trabajador.id}>
                            Editar
                        </Link>
                    </td>
                </tr>
            ))
        );
    }
    return (
        <>
            <h3>Listado de Trabajadores</h3>
            <Link to="/agregartrabajador" className="btn btn-primary mb-2">
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

export default TablaTrabajador
