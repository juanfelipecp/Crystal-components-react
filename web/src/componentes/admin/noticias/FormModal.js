import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import clienteAxios from '../../../config/axios'


const FormModal = () => {

    const history = useHistory()
    const [formulario, setFormulario] = useState({
            titulo :'',
            descripcion: '',
            img:''
    })
    const onSubmit  = async (e) =>{
        e.preventDefault()
        const {titulo, descripcion,img} = formulario
        if (titulo == ''|| descripcion == ''||img == '' ){

        }
        else{
           await clienteAxios.post('/noticias', {titulo, descripcion,img})
           history.push('/admin')
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
                        <label class=" negro">Mision y Vision</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="titulo" name="titulo" onChange={onChange} />
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
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="img" name="img" onChange={onChange} />
                            <span class="icon is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-right">
                                <i class="fas fa-check"></i>
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
