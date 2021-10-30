import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';

const FormAgregarUsuario = ({
    usuario,
    onChange,
    onSubmit,
    listarTrabajador,
    onSelectedTypeahead,
    onChangeInputTypeahead,
    onChangeTypeahead
}) => {
    return (
        <div>
            <h3>Editar Usuario</h3>
            <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="nombre"
                                placeholder="Ingrese nombre"
                                value={usuario.nombre}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Clave:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="clave"
                                placeholder="Ingrese una clave"
                                value={usuario.clave}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Vigencia:</Form.Label>
                                <Form.Control 
                                        size="sm"
                                        as="select"
                                        name="vigencia"
                                        value={usuario.vigencia}
                                        onChange={onChange}
                                        required
                                >
                                <option value="">-- Seleccionar --</option>
                                <option value="1">Vigente</option>
                                <option value="0">No Vigente</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>trabajador:</Form.Label>
                            <Typeahead
                                size="sm" 
                                id="basic-typeahead-single"
                                placeholder="Elige una opción"
                                options={listarTrabajador}
                                labelKey={opcion => String(opcion.nombres)}
                                selected={onSelectedTypeahead('idTrabajador', usuario.idTrabajador)}
                                onInputChange={(valorNuevo) =>
                                    onChangeInputTypeahead('idTrabajador', valorNuevo)}
                                onChange={(valorNuevo) => valorNuevo.length > 0 &&
                                    onChangeTypeahead('idTrabajador', valorNuevo[0].id)}
                                inputProps = {{ required: true }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                            Crear
                        </Button>
                        <Link to="/usuario" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default FormAgregarUsuario
