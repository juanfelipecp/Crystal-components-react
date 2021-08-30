import React from 'react'
import  Navbar  from '../componentes/Navbar'
import Listproductstip from '../componentes/Listarproducstip'
import Footer from '../componentes/Footer'
import '../css/estilo.css'

const Productos = () => {
    return (
        <div>
            <Navbar/>
            <div class="full_content">
            <Listproductstip/>
           </div>
           <Footer/>
        </div>
    )
}

export default Productos
