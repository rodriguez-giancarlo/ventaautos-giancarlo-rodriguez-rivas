import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../services/api';
import useFetch from '../../hooks/useFetch';
import FormEditarAuto from '../../components/auto/FormEditarAuto';

const EditarAuto = () => {
    const [auto, setauto] = useState({
        modelo: '',
        placa: '',
        color: '',
        idMarca:''  
    });

    const listarMarca = useFetch('/marca');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchauto = async () => {
            try {
                const datos = await buscar('/auto', id);
                setauto({
                    modelo: datos.modelo,
                    placa:datos.placa,
                    color:datos.color,
                    idMarca: parseInt(datos.idMarca)                    
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchauto();
    }, [id])
    
    const handleChange = (event) => {   
        const target = event.target;
        var valor = target.value;
        const nombre = target.name;
        setauto({
            ...auto,
            [nombre]: valor
        });
    }

    const handleChangeTypeahead = (nombre, valor) => {
        setauto({
            ...auto,
            [nombre]: valor
        });
    }

    const buscarObjeto = (fk, valorNuevo) => {
        switch (fk) {
            case 'idMarca':
                return listarMarca.datos.find((marca) => marca.nombre === valorNuevo);
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
            case 'idMarca':
                return listarMarca.datos.find((marca) => marca.id === id);
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
                const autoModificado = await modificar('/auto', id, auto);
                console.log(autoModificado);
                history.push('/auto');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <FormEditarAuto
                Auto={auto}
                listarMarca={listarMarca.datos}                  
                onChange={handleChange}
                onSelectedTypeahead={onSelectedTypeahead}
                onChangeInputTypeahead={handleChangeInputTypeahead}
                onChangeTypeahead={handleChangeTypeahead}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditarAuto;