import React, { useState } from 'react'
import { Button, Form } from 'react-bulma-components'
import ClienteAxios from '../../../config/axios'

const FormularioModificar = ({ objetoSeleccionado }) => {

    const [objeto, setObjeto] = useState({
        nombre: objetoSeleccionado[0].nombre,
        email: objetoSeleccionado[0].email,
        telefono: objetoSeleccionado[0].telefono,
        contrasena: objetoSeleccionado[0].contrasena,
        id_rol: objetoSeleccionado[0].id_rol,
        direccion: objetoSeleccionado[0].direccion,



    })

    const { nombre,email,telefono,contrasena,id_rol,direccion } = objeto
    
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
        if (nombre== ''||email== ''||telefono==''||contrasena==''||id_rol==''|| direccion=='' ) {
            console.log("Todos los campos son obligatorios")
        } else {
            
            ModificarObjeto({
                nombre,email,telefono,contrasena,id_rol,direccion
            }, objetoSeleccionado[0].id_usuarios)
            
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
                <Form.Label>email:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="email"
                        value={objeto && objeto.email}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>telefono:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="telefono"
                        value={objeto && objeto.telefono}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>contrasena:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="contrasena"
                        value={objeto && objeto.contrasena}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>id_rol:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="id_rol"
                        value={objeto && objeto.id_rol}
                        onChange={onChange}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>direccion:</Form.Label>
                <Form.Control>
                    <Form.Input
                        color='black'
                        name="direccion"
                        value={objeto && objeto.direccion}
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
