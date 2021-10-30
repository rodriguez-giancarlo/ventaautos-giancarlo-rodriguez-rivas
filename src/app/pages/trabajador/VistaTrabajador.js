import React from 'react'
import TablaTrabajador from '../../components/trabajador/TablaTrabajador'
import useFetch from '../../hooks/useFetch';


const VistaTrabajador = () => {
    const { datos: listaTrabajador } = useFetch('/trabajador');
    
    return (
        <TablaTrabajador
            listaTrabajador={listaTrabajador}
        />
    );
}

export default VistaTrabajador
