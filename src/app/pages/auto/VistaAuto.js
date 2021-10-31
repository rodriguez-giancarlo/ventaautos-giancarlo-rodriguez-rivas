import React from 'react'
import TablaAuto from '../../components/auto/TablaAuto'
import useFetch from '../../hooks/useFetch';

const VistaAuto = () => {
    const { datos: listaAuto } = useFetch('/auto');
    return (
        <TablaAuto
            listaAuto={listaAuto}
        />
    )
}
export default VistaAuto
