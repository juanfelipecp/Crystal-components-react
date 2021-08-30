import React, { useState } from 'react'
import { Button, Form } from 'react-bulma-components'
import ClienteAxios from '../../../config/axios'

const FormularioModificar = ({ objetoSeleccionado }) => {

    const [objeto, setObjeto] = useState({
        term: objetoSeleccionado[0].term

    })

    const { term } = objeto
    
    const ModificarObjeto = async (datos, id) => {
        try {
            
            const response = await ClienteAxios.put(`/proveedores/${id}`, datos)
            window.location.reload()
            
        } catch (error) {
            console.log(error)
        }
    }
    

    const onChange = (e) => {
        setObjeto({
            ...objeto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (term === ''  ) {
            console.log("Todos los campos son obligatorios")
        } else {
            
            ModificarObjeto({
                term
            }, objetoSeleccionado[0].id_term)
            
        }

    }
    
    return (
        <form onSubmit={onSubmit}>
            <Form.Field>
                <Form.Label>term:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="term"
                        value={objeto && objeto.term}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            
            <Button
                color="primary"
                type="submit"
            >
                Modificar
            </Button>
        </form>
    )
    
}

export default FormularioModificar
