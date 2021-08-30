import React from 'react'
import BarChart from '../componentes/BarChart'
import Footer from '../componentes/Footer'
import LineChart from '../componentes/LineChart'
import  Navbar  from '../componentes/Navbar'
import '../css/estilo.css'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <div class="full_content">
            <p class="titulos"> ventas por mes</p>
            <BarChart/>
            <p class="titulos">dolar en el mercado actual </p>
            <LineChart/>
            </div>
            <Footer></Footer>
                        


        </div>
        
    )
}

export default Home

