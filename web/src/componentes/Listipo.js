import React, { useState, useEffect } from 'react'
import { getTipos } from '../servicios'

const Listipo = () => {
    const [Tipos, setTipos] = useState([])
    useEffect(() => {

        async function loadTipos() {
            const datos = await getTipos();
            console.log(datos);

            if (datos.status === 200) {
                setTipos(datos.data.tipos_product)
            }
        }

        loadTipos();

    }, [])


    return (
        <div>
            {
                Tipos.map((item) => (
                    <div key={item.id_tipos} >
                        <a href={`/productos/${item.id_tipos}`} class="dropdown-item" class="dropdown-item">
                                 {item.tipo}
                        </a>
                        
                    </div>
                ))
            }
                    
                    
        </div> )
        
}

export default Listipo