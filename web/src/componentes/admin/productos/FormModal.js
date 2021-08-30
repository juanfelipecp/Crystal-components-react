import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import clienteAxios from '../../../config/axios'


const FormModal = () => {

    const history = useHistory()
    const [formulario, setFormulario] = useState({
            nombre :'',
            descripcion: '',
            id_tipos: '',
            precio: '',
            img: ''
    })
    const onSubmit  = async (e) =>{
        e.preventDefault()
        const {nombre, descripcion, id_tipos, precio,img} = formulario
        if (nombre == ''|| descripcion == ''||id_tipos == ''|| precio == ''|| img == '' ){

        }
        else{
           await clienteAxios.post('/productos', {nombre, descripcion, id_tipos, precio,img})
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
                    <label class=" negro">descripcion</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="descripcion" name="descripcion" onChange={onChange} />
                            <span class="icon is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </div>
                
                      
                   
                    </div>
                    <div class="field">
                        <label class=" negro">id_tipos</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="id_tipos" name="id_tipos" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class=" negro">precio</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="precio" name="precio" onChange={onChange} />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope fa-xs"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check fa-xs"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class=" negro">img</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="img" name="img" onChange={onChange} />
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
