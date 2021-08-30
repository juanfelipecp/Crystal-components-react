import React, { useState, useEffect } from 'react'
import { getRedes } from '../servicios'
import '../css/estilo.css'

const ListRedes = () => {
    const [redes, setRedes] = useState([])
    useEffect(() => {

        async function loadRedes() {
             
            const datos = await getRedes();


            if (datos.status === 200) {
                setRedes(datos.data.redes)
            }
        }

        loadRedes();

    }, [])


    return (
        <div>
            {
                redes.map((item) => (
                    <div key={item.id_redes} class="red">
                             <a href={item.link}  >  <img src={item.imagen} style={{ width: 25, height: 25 }} class="redes"></img>  <span class="redfont">{item.nombre}</span>   </a>

                                 

    
                        
                    </div>
                ))
            }
                    
                    
        </div> )
        
}

export default ListRedes