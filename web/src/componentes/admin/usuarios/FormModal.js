import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import clienteAxios from '../../../config/axios'


const FormModal = () => {

    const history = useHistory()
    const [formulario, setFormulario] = useState({
        nombre :'',
        email:'',
        telefono :'',
        contrasena :'',
        id_rol :parseInt(),
        direccion :'',

    })
    const onSubmit  = async (e) =>{
        e.preventDefault()
        const {nombre,email,telefono,contrasena,id_rol,direccion} = formulario
        if ( nombre== ''||email== ''||telefono==''||contrasena==''||id_rol==''|| direccion==''){

        }
        else{
           await clienteAxios.post('/usuario', {nombre,email,telefono,contrasena,id_rol,direccion})
           history.push('/admin')
           window.location.reload()
        }
    }
    const onChange =(e) =>{
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <div class="content">
                <form onSubmit={onSubmit}>
                    <div class="field">
                        <label class=" negro">nombre</label>
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
                        <label class=" negro">email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="email" name="email" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                        
                    </div>
                    <div class="field">
                        <label class=" negro">telefono</label>
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
                        <label class=" negro">contrasena</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="contrasena" name="contrasena" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                        
                    </div>
                    <div class="field">
                        <label class=" negro">id_rol</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="id_rol" name="id_rol" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                        
                    </div>
                    <div class="field">
                        <label class=" negro">direccion</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="direccion" name="direccion" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                        <button class="submit button negro negroo ">enviar</button>
                    </div>

               
                </form>
            </div>


            
        </div>
    )
}

export default FormModal
