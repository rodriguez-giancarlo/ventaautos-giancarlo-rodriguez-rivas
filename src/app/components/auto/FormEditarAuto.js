import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const FormEditarAuto = ({    
    Auto,
    listarMarca,
    onChange,
    onSelectedTypeahead,
    onChangeInputTypeahead,
    onChangeTypeahead,
    onSubmit
}) => {

    return (
        <div>
            <h3>Agregar Auto</h3>
            <Form onSubmit={onSubmit}>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Modelo:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="modelo"
                                placeholder="Ingrese modelo del auto"
                                value={Auto.modelo}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Placa:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="placa"
                                placeholder="Ingrese placa del auto"
                                value={Auto.placa}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Form.Group>
                            <Form.Label>Color:</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                name="color"
                                placeholder="Ingrese color del auto"
                                value={Auto.color}
                                onChange={onChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Marca:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                placeholder="Elige una opción"
                                options={listarMarca}
                                labelKey={opcion => String(opcion.nombre)}
                                selected={onSelectedTypeahead('idMarca', Auto.idMarca)}
                                onInputChange={(valorNuevo) =>
                                    onChangeInputTypeahead('idMarca', valorNuevo)}
                                onChange={(valorNuevo) => valorNuevo.length > 0 &&
                                    onChangeTypeahead('idMarca', valorNuevo[0].id)}
                                inputProps = {{ required: true }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                            editar
                        </Button>
                        <Link to="/auto" className="btn btn-danger">
                            Cancelar
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default FormEditarAuto;