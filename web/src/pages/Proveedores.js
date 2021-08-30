import React from 'react'
import  Navbar  from '../componentes/Navbar'
import ListPorveedores  from '../componentes/Listarproveedores'
import Footer from '../componentes/Footer'
import '../css/estilo.css'


const Categorias = () => {
    return (
        <div>
            <Navbar/>
            <div class="full_content">
            <ListPorveedores/>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Categorias