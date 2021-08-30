import React from 'react'
import Footer from '../componentes/Footer'
import Listproducts from '../componentes/Listproducts'
import  Navbar  from '../componentes/Navbar'
import '../css/estilo.css'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <div class="flex-wrapper">
            <div class="full_content" >
                
            <p class="titulos">¿Que es Crystal components?</p>
            <p class="subtitulos">Es una tienda de componentes donde encontraras tus componentes y perifericos favoritos al mejor precio</p>

            <br/>
            
            <p class="titulos" >Ultimos Productos</p>
            
    
            <Listproducts/>
            </div>
            <Footer/>
            </div>

        </div>
        
    )
}

export default Home


