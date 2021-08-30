import React, { useState } from 'react'
import { Button, Form } from 'react-bulma-components'
import ClienteAxios from '../../../config/axios'

const FormularioModificar = ({ objetoSeleccionado }) => {

    const [objeto, setObjeto] = useState({
        mision: objetoSeleccionado[0].mision,
        vision: objetoSeleccionado[0].vision
    })

    const { mision, vision} = objeto
    
    const ModificarObjeto = async (datos, id) => {
        try {
            
            const response = await ClienteAxios.put(`/mv/${id}`, datos)
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

        if (mision === '' || vision === '') {
            console.log("Todos los campos son obligatorios")
        } else {
            
            ModificarObjeto({
                mision,
                vision
            }, objetoSeleccionado[0].id_mv)
            
        }

    }
    
    return (
        <form onSubmit={onSubmit}>
            <Form.Field>
                <Form.Label>mision:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="mision"
                        value={objeto && objeto.mision}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>vision:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="vision"
                        value={objeto && objeto.vision}
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
