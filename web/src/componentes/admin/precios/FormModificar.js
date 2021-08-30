import React, { useState } from 'react'
import { Button, Form } from 'react-bulma-components'
import ClienteAxios from '../../../config/axios'

const FormularioModificar = ({ objetoSeleccionado }) => {

    const [objeto, setObjeto] = useState({
        dolar: objetoSeleccionado[0].dolar,
        cop: objetoSeleccionado[0].cop
    })

    const { dolar, cop} = objeto
    
    const ModificarObjeto = async (datos, id) => {
        try {
            
            const response = await ClienteAxios.put(`/noticias/${id}`, datos)
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

        if (dolar === '' || cop === '') {
            console.log("Todos los campos son obligatorios")
        } else {
            
            ModificarObjeto({
                dolar,
                cop
            }, objetoSeleccionado[0].id_precios)
            
        }

    }
    
    return (
        <form onSubmit={onSubmit}>
            <Form.Field>
                <Form.Label>dolar:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="dolar"
                        value={objeto && objeto.dolar}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>cop:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="cop"
                        value={objeto && objeto.cop}
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
