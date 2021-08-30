import React, { useState } from 'react'
import { Button, Form } from 'react-bulma-components'
import ClienteAxios from '../../../config/axios'

const FormularioModificar = ({ objetoSeleccionado }) => {

    const [objeto, setObjeto] = useState({
        titulo: objetoSeleccionado[0].titulo,
        vision: objetoSeleccionado[0].descripcion,
        img: objetoSeleccionado[0].img
    })

    const { titulo, descripcion,img} = objeto
    
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

        if (titulo === '' || descripcion === ''||img === '') {
            console.log("Todos los campos son obligatorios")
        } else {
            
            ModificarObjeto({
                titulo,
                descripcion,
                img
            }, objetoSeleccionado[0].id_noticias)
            
        }

    }
    
    return (
        <form onSubmit={onSubmit}>
            <Form.Field>
                <Form.Label>titulo:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="titulo"
                        value={objeto && objeto.titulo}
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
