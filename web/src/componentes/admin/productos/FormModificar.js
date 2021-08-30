import React, { useState } from 'react'
import { Button, Form } from 'react-bulma-components'
import ClienteAxios from '../../../config/axios'

const FormularioModificar = ({ objetoSeleccionado }) => {

    const [objeto, setObjeto] = useState({
        nombre: objetoSeleccionado[0].nombre,
        descripcion: objetoSeleccionado[0].descripcion,
        id_tipos: objetoSeleccionado[0].id_tipos,
        precio: objetoSeleccionado[0].precio,
        img: objetoSeleccionado[0].img,
    })

    const { nombre, descripcion,id_tipos,precio,img} = objeto
    
    const ModificarObjeto = async (datos, id) => {
        try {
            
            const response = await ClienteAxios.put(`/productos/${id}`, datos)
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

        if (nombre === '' || descripcion === ''||id_tipos === '' || precio === ''||img === '' ) {
            console.log("Todos los campos son obligatorios")
        } else {
            
            ModificarObjeto({
                nombre, descripcion,id_tipos,precio,img
            }, objetoSeleccionado[0].id_productos)
            
        }

    }
    
    return (
        <form onSubmit={onSubmit}>
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
                <Form.Label>descripcion:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="descripcion"
                        value={objeto && objeto.descripcion}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>img:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="img"
                        value={objeto && objeto.img}
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
