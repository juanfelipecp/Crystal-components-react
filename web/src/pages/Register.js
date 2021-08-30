import React, {  useState } from 'react'
import Footer from '../componentes/Footer'
import Navbar from '../componentes/Navbar'
import clienteAxios from'../config/axios'
import {useHistory} from 'react-router-dom'
import '../css/estilo.css'

const Register = () => {
    const history = useHistory()
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        telefono:'',
        contrasena:'',
        id_rol: 2,
        direccion:''


    })
    const onSubmit = async (e) => {
        e.preventDefault()
        const { nombre, email,telefono,contrasena,id_rol,direccion} = formulario
        if (nombre == '' || email == ''||telefono == '' || contrasena == ''||id_rol == '' || direccion == '') {

        }
        else {
            await clienteAxios.post('/mensaje/api/agregar', { nombre, email,telefono,contrasena,id_rol,direccion })
            history.push('/')
        }
    }
    const onChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <Navbar />
            <div class="flex-wrapper">
                <div class="full_content" >
                    <div class="content">
                    <form onSubmit={onSubmit}>
                    <div class="field">
                        <label class=" ">nombre</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="nombre" name="nombre" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                        
                    </div>
                    <div class="field">
                        <label class=" ">email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="email" name="email" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                        
                    </div>
                    <div class="field">
                        <label class=" ">telefono</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="telefono" name="telefono" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                        
                    </div>
                    <div class="field">
                        <label class=" ">contrasena</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="password" placeholder="contrasena" name="contrasena" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                        
                    </div>
                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="hidden" value={2} name="id_rol" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                        
                    </div>
                    <div class="field">
                        <label class=" ">direccion</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="direccion" name="direccion" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                        <button class="submit button  o ">enviar</button>
                    </div>

               
                </form>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

     
    )
}

export default Register
