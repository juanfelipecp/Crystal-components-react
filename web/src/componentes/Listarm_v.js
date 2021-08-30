import React, { useState, useEffect } from 'react'
import { getM_v } from '../servicios'
import '../css/estilo.css'

const ListM_v = () => {
    const [M_v, setM_v] = useState([])
    useEffect(() => {

        async function loadM_v() {
            
            const datos = await getM_v();
            console.log(datos);

            if (datos.status === 200) {
                setM_v(datos.data.m_v)
            }
        }

        loadM_v();

    }, [])


    return (
        <div>
            {
                M_v.map((item) => (
                    <div class="full_content" key={item.id_mv} >
                                <p class="titulos">Mision</p>
                                 <span class="subtitulos">{item.mision}</span>
                                 
                                 <p class="titulos">Vision</p>
                                 <span class="subtitulos">{item.vision}</span>

    
                        
                    </div>
                ))
            }
                    
                    
        </div> )
        
}

export default ListM_v