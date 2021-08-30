import React from 'react'
import Footer from '../componentes/Footer'
import ListNoticias from '../componentes/Listarnoticias'
import  Navbar  from '../componentes/Navbar'
import '../css/estilo.css'

const Categorias = () => {
    return (
        <div>
            <Navbar/>
            <div class="full_content">
            <p class="titulos">Noticias</p>
            <ListNoticias/>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Categorias