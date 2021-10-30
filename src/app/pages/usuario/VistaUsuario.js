import React from 'react'
import TablaUsuario from '../../components/usuario/TablaUsuario'
import useFetch from '../../hooks/useFetch';

const VistaUsuario = () => {
    const { datos: listarUsuario} = useFetch('/usuario');
    return (
        <TablaUsuario
            listarUsuario={listarUsuario}
        />
    );
}
export default VistaUsuario