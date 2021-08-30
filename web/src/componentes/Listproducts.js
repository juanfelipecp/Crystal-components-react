import React, { useState, useEffect } from 'react'
import clienteAxios from '../config/axios'
import '../css/estilo.css'

const Listproducts = () => {
    const [products, setProducts] = useState([])


    useEffect (async() => {
        const listarproducto =async() =>{
            const response = await clienteAxios.get('/productos');
            setProducts(response.data.productos) 
        }
        listarproducto()
    }

    , [])


    return (
        <div>
            <div class="colums">
                {
                    products.map(producto=>{
                        return(

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
                       
                        
                        )
                    })
                }
            </div>
                    
                    
        </div> )
        
}





export default Listproducts
