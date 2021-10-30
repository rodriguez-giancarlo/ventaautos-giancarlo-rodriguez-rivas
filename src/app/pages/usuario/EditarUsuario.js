import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../services/api';
import FormEditarUsuario from '../../components/usuario/FormEditarUsuario';
import useFetch from '../../hooks/useFetch';


const EditarUsuario = () => {
    const [usuario, setusuario] = useState({
        nombre: '',
        clave: '',
        vigencia: 0,
        idTrabajador:0
    });

    const listarTrabajador= useFetch('/trabajador');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchusuario = async () => {
            try {
                const datos = await buscar('/usuario', id);
                setusuario({
                    nombre: datos.nombre,
                    clave:datos.clave,
                    vigencia: parseInt(datos.vigencia),
                    idTrabajador: datos.idTrabajador                    
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchusuario();
    }, [id])
    
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
                const usuarioModificado = await modificar('/usuario', id, usuario);
                console.log(usuarioModificado);
                history.push('/usuario');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <FormEditarUsuario
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

export default EditarUsuario;