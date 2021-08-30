import React, { useState } from 'react'
import { Button, Form } from 'react-bulma-components'
import ClienteAxios from '../../../config/axios'

const FormularioModificar = ({ objetoSeleccionado }) => {

    const [objeto, setObjeto] = useState({
        mes: objetoSeleccionado[0].mes,
        numero: objetoSeleccionado[0].numero
    })

    const { mes, numero} = objeto
    
    const ModificarObjeto = async (datos, id) => {
        try {
            
            const response = await ClienteAxios.put(`/ventas/${id}`, datos)
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

        if (mes== ''||numero== '') {
            console.log("Todos los campos son obligatorios")
        } else {
            
            ModificarObjeto({
                mes, numero
            }, objetoSeleccionado[0].id_precios)
            
        }

    }
    
    return (
        <form onSubmit={onSubmit}>
            <Form.Field>
                <Form.Label>mes:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="mes"
                        value={objeto && objeto.mes}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>numero:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="numero"
                        value={objeto && objeto.numero}
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
