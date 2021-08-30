import React,{useState} from 'react'
import clienteAxios from '../config/axios'
import Input from '../componentes/parcial/Input'
import Submit from '../componentes/parcial/Submit'
import Listparcial from '../componentes/parcial/Listparcial'
import Titulo from '../componentes/parcial/Titulo'
import {useHistory} from 'react-router-dom'

const Parcial = () => {
    const history = useHistory()
    const [formulario, setFormulario] = useState({
            nombre :''
    })
    const onSubmit  = async (e) =>{
        e.preventDefault()
        const {nombre} = formulario
        if (nombre == ''){

        }
        else{
           await clienteAxios.post('/parciaal/', {nombre})
           history.push('/parcial')
        }
    }
    


    return (
        <div>
            <Titulo/>
            <form onSubmit={onSubmit} method="GET">
            <Input/>  <Submit/>   
            </form>

            <Listparcial/>         
        </div>
    )
}

export default Parcial
