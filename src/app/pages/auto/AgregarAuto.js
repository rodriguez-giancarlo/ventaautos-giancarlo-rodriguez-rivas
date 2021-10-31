import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../services/api';
import useFetch from '../../hooks/useFetch';
import FormAgregarAuto from '../../components/auto/FormAgregarAuto';

const AgregarAuto = () => {
    const [ Auto, setAuto ] = useState({
        modelo: '',
        placa: '',
        color: '',
        idMarca:''        
    });

    const listarMarca = useFetch('/marca');
    const history = useHistory();

    const handleChange = (event) => {    
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setAuto({
            ...Auto,
            [nombre]: valor
        });
    }

    const handleChangeTypeahead = (nombre, valor) => {
        setAuto({
            ...Auto,
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
                const autoNuevo = await crear('/auto', Auto);
                console.log(autoNuevo);
                history.push('/auto');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }
    return (
        <>  
            <FormAgregarAuto
                Auto={Auto}
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

export default AgregarAuto;