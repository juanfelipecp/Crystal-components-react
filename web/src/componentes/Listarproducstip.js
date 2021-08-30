import React, { useState, useEffect,  } from 'react'
import { useParams , useHistory } from 'react-router-dom'
import clienteAxios from '../config/axios'
import '../css/estilo.css'


const Listarproducstip = () => {
    const history = useHistory()
    const { id } = useParams();
    console.log(id);
    const [products, setProducts] = useState([])
    useEffect(() => {

        async function loadProducts() {
            const dato = await clienteAxios.get(`/productos/${id}`);
            console.log(dato);

            if (dato.status === 200) {
                setProducts(dato.data.productos)
                
            }
            history.push(`/productos/${id}`)
            
            
        }

        loadProducts();
        

    }, [])
    
    return (
        <div>
            {
                products.map(producto => (
                    <div class="card2  ">
                        <div class="card "  >
                            <div class="card-image" style={{ width: 300, height: 300 }}>
                                <figure class="image is-4by3">
                                    <img src={producto.img} />
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title">
                                    {producto.nombre}
                                </p>
                                <p class="subtitle">
                                    {producto.precio}
                                </p>
                                <div class="content" >
                                    {producto.descripcion}
                                </div>
                                <button class="button is-black" >Comprar</button>
                            </div>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default Listarproducstip
