import React from 'react'
import { Link } from 'react-router-dom'

 


const Navbar = () => {
    return (
<div>


<nav class="navbar is-black " role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fd2%2F60%2F62%2Fd26062eed2a51c2aa40a136bad115db6--lady-madonna-madonna-art.jpg&f=1&nofb=1" width="50" height="100" />
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <Link to="/" className="navbar-item"> Home </Link >

            <div class="dropdown is-hoverable ">
                <div class="dropdown-trigger">
                    <button class="button is-black" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Productos</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                    <Link to={`/productos/1`} class="dropdown-item" class="dropdown-item" > Fuentes </Link>
                    <Link to={`/productos/2`} class="dropdown-item" class="dropdown-item"> Rams </Link>
                    <Link to={`/productos/3`} class="dropdown-item" class="dropdown-item"> Motherboard </Link>
                    <Link to={`/productos/4`} class="dropdown-item" class="dropdown-item"> Gpu </Link>
                    <Link to={`/productos/5`} class="dropdown-item" class="dropdown-item"> Cpu </Link>
                    <Link to={`/productos/6`} class="dropdown-item" class="dropdown-item"> Discos </Link>
                    <Link to={`/productos/7`} class="dropdown-item" class="dropdown-item"> varios </Link>
                 
                    </div>
                </div>
            </div>
            <Link to="/Mercadoactual" className="navbar-item"> Mercado actual </Link >
                <Link to="/Noticias" className="navbar-item"> Noticias</Link >
            <div class="navbar-item has-dropdown is-hoverable">
                <div class="dropdown is-hoverable ">
                    <div class="dropdown-trigger">
                        <button class="button is-black" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>Nosotros</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <Link to="/mv" className="navbar-item"> Mision y vision  </Link >
                            <Link to="/proveedores" className="navbar-item"> Proveedores </Link >
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-dark" href="/register/">
                        <strong>registrarse</strong>
                    </a>
                    <a class="button is-light">
                        iniciar sesion
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>


</div>
    )
}

export default Navbar


