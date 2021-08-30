import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import clienteAxios from '../../../config/axios'


const FormModal = () => {

    const history = useHistory()
    const [formulario, setFormulario] = useState({
            term :''

    })
    const onSubmit  = async (e) =>{
        e.preventDefault()
        const {term} = formulario
        if ( term== '' ){

        }
        else{
           await clienteAxios.post('/term', {term})
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
                        <label class=" negro">link</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="term" name="term" onChange={onChange} />
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
