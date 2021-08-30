import React, { useState, useEffect } from 'react'
import {getPorveedores} from '../servicios'

const ListPorveedores = () => {
    const [products, setPorveedores] = useState([])
    useEffect(() => {

        async function loadPorveedores() {
            const datos = await getPorveedores();
            console.log(datos);

            if (datos.status === 200) {
                setPorveedores(datos.data.proveedores)
            }
        }

        loadPorveedores();

    }, [])


    return (
        <div>
            {
                               products.map((item) => (
                                <div class="card2" key={item.id_proveedores} >
                                        <div >
                                            <div class="card" >
                                                <div class="card-content">
                                                    <p class="title">
                                                        {item.nombre}
                                                    </p>
                                                    <div class="content" >
                                                        {item.info}
                                                    </div>
                                                    <div class="content" >
                                                        <a href={item.link}> ir a pagina  </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            ))
                        }
                                
                                
                                </div> )
                    
        
}



export default ListPorveedores