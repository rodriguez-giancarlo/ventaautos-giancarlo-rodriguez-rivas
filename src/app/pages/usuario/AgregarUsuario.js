import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../services/api';
import FormAgregarUsuario from '../../components/usuario/FormAgregarUsuario';
import useFetch from '../../hooks/useFetch';

const AgregarUsuario = () => {
    const [usuario, setusuario] = useState({
        nombre: '',
        clave: '',
        vigencia: 0,
        idTrabajador:0
    });

    const listarTrabajador= useFetch('/trabajador');
    const history = useHistory();

    const handleChange = (event) => {   
        const target = event.target;
        var valor = target.value;
        const nombre = target.name;
        if(nombre==="vigencia"){valor = parseInt(valor)}
        setusuario({
                ...usuario,
                [nombre]: valor
        });
    }
    const handleChangeTypeahead = (nombre, valor) => {
        setusuario({
            ...usuario,
            [nombre]: valor
        });
    }
    const buscarObjeto = (fk, valorNuevo) => {
        switch (fk) {
            case 'idTrabajador':
                return listarTrabajador.datos.find((trabajador) => trabajador.nombres === valorNuevo);
            default:
                return undefined;
        }
    }

    const handleChangeInputTypeahead = (fk, valorNuevo) => {
        const datos = buscarObjeto(fk, valorNuevo);
        const id = datos ? datos.id : -1;
        const valor = valorNuevo === '' ? 0 : id;
        handleChangeTypeahead(fk, valor);
    }

    const buscarObjetoPorID = (fk, id) => {
        switch (fk) {
            case 'idTrabajador':
                return listarTrabajador.datos.find((trabajador) => trabajador.id === id);
            default:
                return undefined;
        }
    }

    const onSelectedTypeahead = (fk, id) => {
        const datos = buscarObjetoPorID(fk, id);
        const opcionSeleccionado = datos ? Array(datos) : [];
        return opcionSeleccionado;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {                
                const usuarioNuevo = await crear('/usuario', usuario);
                console.log(usuarioNuevo);
                history.push('/usuario');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return (
        <>
            <FormAgregarUsuario
                usuario={usuario}
                listarTrabajador={listarTrabajador.datos}                  
                onChange={handleChange}
                onSelectedTypeahead={onSelectedTypeahead}
                onChangeInputTypeahead={handleChangeInputTypeahead}
                onChangeTypeahead={handleChangeTypeahead}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default AgregarUsuario;