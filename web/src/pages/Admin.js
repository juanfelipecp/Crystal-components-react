import React from 'react'
import Navbar from '../componentes/Navbar'
import Footer from '../componentes/Footer'
import Listcontac from '../componentes/admin/contactanos/Listcontac'
import Listm_v from '../componentes/admin/m_v/Listm_v'
import Listnoticias from '../componentes/admin/noticias/Listnoticias'
import Listprecios from '../componentes/admin/precios/Listprecios'
import Listproductos from '../componentes/admin/productos/Listproductos'
import Listproveedores from '../componentes/admin/proveedores/Listproveedores'
import Listredes from '../componentes/admin/redes/Listredes'
import Listterm from '../componentes/admin/term/Listterm'
import Listusuarios from '../componentes/admin/usuarios/Listusuarios'
import Listventas from '../componentes/admin/ventas/Listventas'
const Admin = () => {
    return (
        <div>

            <Navbar />
            
            <div class="flex-wrapper">
                <div class="full_content" >
                        <p class="titulos">Contactanos</p>
                        <Listcontac/>
                        <p class="titulos">Mision y Vision</p>
                        <Listm_v/>
                        <p class="titulos">Noticias</p>
                        <Listnoticias/>
                        <p class="titulos">Precios</p>
                        <Listprecios/>
                        <p class="titulos">productos</p>
                        <Listproductos/>
                        <p class="titulos">proveedores</p>
                        <Listproveedores/>
                        <p class="titulos">redes</p>
                        <Listredes/>
                        <p class="titulos">terminos y condiciones</p>
                        <Listterm/>
                        <p class="titulos">usuarios</p>
                        <Listusuarios/>
                        <p class="titulos">ventas</p>
                        <Listventas/>
                    
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Admin
