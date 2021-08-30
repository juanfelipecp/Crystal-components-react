import React, { useState, useEffect } from 'react'
import clienteAxios from '../../../config/axios'
import { Modal } from 'react-bulma-components'
import FormModal from './FormModal'
import FormModificar from './FormModificar'

const Listproductos = () => {
    const [modal, setModal] = useState(false);
    const [proveedores, setProveedores] = useState([])
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
    async function loadProveedores() {
        const dato = await clienteAxios.get(`/proveedores/`);


        if (dato.status === 200) {
            setProveedores(dato.data.proveedores)
        }

    }
    const ConsultarObjeto = async (id) => {
        try {
            const dato = await clienteAxios.get(`/proveedores/${id}`);
            setObjetoSeleccionado(dato.data.proveedores)
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
                    Modificar proveedores
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
    const Eliminarproveedores = async (id) => {
        try {
            const response = await clienteAxios.delete(`/proveedores/${id}`)
            setProveedores(proveedores.filter(proveedores => proveedores.id_proveedores !== id))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {



        loadProveedores();

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
                            info
                    </th>
                        <th>
                            link
                    </th>
                        <th>

                            <button
                                onClick={OpenModal}
                                className=' submit button  is-success'>
                                Agregar
			                </button>
                        </th>
                    </tr>
                    {proveedores.map(item => (
                        <tr key={item.id_proveedores} >
                            <td>
                                {item.nombre}
                            </td>
                            <td>
                                {item.info}
                            </td>
                            <td>
                                {item.link}
                            </td>
                            <td>
                                <button
                                    className=' button is-warning '
                                    onClick={() => ObjetoSeleccionado(item.id_proveedores)}>
                                    Modificar
			            </button>
                                <button
                                    className='  button is-danger '
                                    onClick={() => Eliminarproveedores(item.id_proveedores)}>
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
