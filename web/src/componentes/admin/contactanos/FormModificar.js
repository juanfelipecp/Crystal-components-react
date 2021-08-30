import React, { useState } from 'react'
import { Button, Form } from 'react-bulma-components'
import ClienteAxios from '../../../config/axios'

const FormularioModificar = ({ objetoSeleccionado }) => {

    const [objeto, setObjeto] = useState({
        email: objetoSeleccionado[0].email,
        pregunta: objetoSeleccionado[0].pregunta
    })

    const { email, pregunta} = objeto
    
    const ModificarObjeto = async (datos, id) => {
        try {
            
            const response = await ClienteAxios.put(`/contactanos/${id}`, datos)
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

        if (email === '' || pregunta === '') {
            console.log("Todos los campos son obligatorios")
        } else {
            
            ModificarObjeto({
                email,
                pregunta
            }, objetoSeleccionado[0].id_contactanos)
            
        }

    }
    
    return (
        <form onSubmit={onSubmit}>
            <Form.Field>
                <Form.Label>Usuario:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="nombre"
                        value={objeto && objeto.email}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>pregunta:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="correo"
                        value={objeto && objeto.pregunta}
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
