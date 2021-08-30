import React, { useState, useEffect } from 'react'
import clienteAxios from '../../../config/axios'
import { Modal } from 'react-bulma-components'
import FormModal from './FormModal'
import FormModificar from './FormModificar'

const Listproductos = () => {
    const [modal, setModal] = useState(false);
    const [usuario, setUsuario] = useState([])
    const OpenModal = () => {
        setModal(true);
    };
    const [showModificar, setShowModalModificar] = useState(false)
    const [objetoSeleccionado, setObjetoSeleccionado] = useState([])


    const CloseModal = (result) => {
        if (result) {
            
        }
        setModal(false);
    };
    async function loadUsuario() {
        const dato = await clienteAxios.get(`/usuario/`);


        if (dato.status === 200) {
            setUsuario(dato.data.usuarios)
        }

    }
    const ConsultarObjeto = async (id) => {
        try {
            const dato = await clienteAxios.get(`/usuario/${id}`);
            setObjetoSeleccionado(dato.data.usuario)
            console.log(objetoSeleccionado)
            
        } catch (error) {
            console.log(error)
        }
    }
    const openCloseModalModificar = () => setShowModalModificar(!showModificar)
    const ObjetoSeleccionado = (id) => {
        openCloseModalModificar() 
        ConsultarObjeto(id)
        
    }
    const modalContentModificar = (
        <Modal.Card>
            <Modal.Card.Header>
                <Modal.Card.Title>
                    Modificar usuarios
                </Modal.Card.Title>
            </Modal.Card.Header>
            <Modal.Card.Body>
                <FormModificar 
                    objetoSeleccionado={objetoSeleccionado}
                />
            </Modal.Card.Body>
        </Modal.Card>
        
    )
    const modalModificar = (
        <Modal
            show={showModificar}
            onClose={openCloseModalModificar}
        >
            <Modal.Content>
                {modalContentModificar}
            </Modal.Content>
        </Modal>
    )
    const Eliminarusuario = async (id) => {
        try {
            const response = await clienteAxios.delete(`/usuario/${id}`)
            setUsuario(usuario.filter(usuario => usuario.id_usuarios !== id))
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {



        loadUsuario();

    }, [])
   
    return (
        <div>
            {modalModificar}
            <div >
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth  ">
                    <tr>
                        <th>
                        nombre
                    </th>
                    <th>
                        email
                    </th>
                    <th>
                        telefono
                    </th>
                    <th>
                        contrasena
                    </th>
                    <th>
                        rol
                    </th>
                    <th>
                        direccion
                    </th>
                        <th>

                            <button
                                onClick={OpenModal}
                                className=' submit button  is-success'>
                                Agregar
			                </button>
                        </th>
                    </tr>
                    {usuario.map(item => (
                        <tr key={item.id_usuarios} >
                            <td>
                                {item.nombre}
                            </td>
                            <td>
                                {item.email}
                            </td>
                            <td>
                                {item.telefono}
                            </td>
                            <td>
                                {item.contrasena}
                            </td>
                            <td>
                                {item.id_rol}
                            </td>
                            <td>
                                {item.direccion}
                            </td>
                            <td>
                                <button
                                    className=' button is-warning '
                                    onClick={()=> ObjetoSeleccionado(item.id_usuarios)}>
                                    Modificar
			            </button>
                                <button
                                    className='  button is-danger '
                                    onClick={() => Eliminarusuario(item.id_usuarios)}>
                                    eliminar
			            </button>
                            </td>
                        </tr>
                    ))}
                </table>

                <Modal show={modal} onClose={CloseModal}>
                    <Modal.Content>
                        <FormModal closeModal={CloseModal} />
                    </Modal.Content>
                </Modal>

            </div>
        </div>
    )
}

export default Listproductos
