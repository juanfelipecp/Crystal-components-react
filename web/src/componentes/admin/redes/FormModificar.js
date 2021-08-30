import React, { useState } from 'react'
import { Button, Form } from 'react-bulma-components'
import ClienteAxios from '../../../config/axios'

const FormularioModificar = ({ objetoSeleccionado }) => {

    const [objeto, setObjeto] = useState({
        imagen: objetoSeleccionado[0].imagen,
        nombre: objetoSeleccionado[0].nombre,
        link: objetoSeleccionado[0].link,
    })

    const { imagen,nombre,link } = objeto
    
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
        if (imagen === '' || nombre === ''||link === '' ) {
            console.log("Todos los campos son obligatorios")
        } else {
            
            ModificarObjeto({
                imagen,nombre,link
            }, objetoSeleccionado[0].id_redes)
            
        }

    }
    
    return (
        <form onSubmit={onSubmit}>
            <Form.Field>
                <Form.Label>imagen:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="imagen"
                        value={objeto && objeto.imagen}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>nombre:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="nombre"
                        value={objeto && objeto.nombre}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>link:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="link"
                        value={objeto && objeto.link}
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
