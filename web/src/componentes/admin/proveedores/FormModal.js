import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import clienteAxios from '../../../config/axios'


const FormModal = () => {

    const history = useHistory()
    const [formulario, setFormulario] = useState({
            nombre :'',
            info: '',
            link: ''
    })
    const onSubmit  = async (e) =>{
        e.preventDefault()
        const {nombre, info, link} = formulario
        if (nombre == ''|| info == ''||link == '' ){

        }
        else{
           await clienteAxios.post('/proveedores', {nombre, info, link})
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
                    <label class=" negro">info</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="info" name="info" onChange={onChange} />
                            <span class="icon is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </div>
                
                      
                   
                    </div>
                    <div class="field">
                        <label class=" negro">link</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="link" name="link" onChange={onChange} />
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
