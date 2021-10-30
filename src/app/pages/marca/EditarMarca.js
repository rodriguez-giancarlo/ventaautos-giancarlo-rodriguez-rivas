import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../services/api';
import FormEditarMarca from '../../components/marca/FormEditarMarca';

const EditarMarca = () => {
    const [marca, setmarca] = useState({
        nombre: ''
    });
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        const fetchmarca = async () => {
            try {
                const datos = await buscar('/marca', id);
                setmarca({
                    nombre: datos.nombre
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchmarca();
    }, [id])
    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setmarca({
            ...marca,
            [nombre]: valor
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const marcaModificada = await modificar('/marca', id, marca);
                console.log(marcaModificada);
                history.push('/marca');
            }           
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }
    return (
        <FormEditarMarca  
        marca={marca}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />
    )
}

export default EditarMarca
