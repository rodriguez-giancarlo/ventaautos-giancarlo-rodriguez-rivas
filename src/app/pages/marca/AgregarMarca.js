import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../services/api';
import FormAgregarMarca from '../../components/marca/FormAgregarMarca';

const AgregarMarca = () => {
    const [ marca, setmarca ] = useState({
        nombre: '',
        vigencia:''
    });
    const history = useHistory();
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
                const nuevamarca = await crear('/marca', marca);
                console.log(nuevamarca);
                history.push('/marca');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }
    return (
        <FormAgregarMarca
        marca={marca}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />
    )
}
export default AgregarMarca
