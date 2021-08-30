import React, { useState, useEffect } from 'react'
import { getNoticias } from '../servicios'
import '../css/estilo.css'
const ListNoticias = () => {
    const [products, setNoticias] = useState([])
    useEffect(() => {

        async function loadNoticias() {
            const datos = await getNoticias();
            console.log(datos);

            if (datos.status === 200) {
                setNoticias(datos.data.noticias)
            }
        }

        loadNoticias();

    }, [])


    return (
       
        <div class ="colums">
            {
                products.map((item) => (
                        <div class="card2">
                            <div class="card" >
                                <div class="card-content">
                                    <div class="card-image" >
                                        <figure class="image is-4by3">
                                            <img src={item.img} />
                                        </figure>
                                    </div>
                                    <p class="title">
                                        {item.titulo}
                                    </p>
                                    <div class="content" >
                                        {item.descripcion}
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                ))
            }


        </div>)


}



export default ListNoticias