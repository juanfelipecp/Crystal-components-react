import React, { useState, useEffect } from 'react'
import clienteAxios from '../../../config/axios'
import { Modal } from 'react-bulma-components'
import FormModal from './FormModal'
import FormModificar from './FormModificar'

const Listcontac = () => {
    const [modal, setModal] = useState(false);

    const [showModificar, setShowModalModificar] = useState(false)
    const [contacts, setContacts] = useState([])

    const [objetoSeleccionado, setobjetoSeleccionado] = useState([])
    
    const OpenModal = () => {
        setModal(true);
    };

    const CloseModal = (result) => {
        if (result) {

        }
        setModal(false);
    };


    useEffect(() => {
        debugger
        async function loadContacts() {
            const dato = await clienteAxios.get(`/contactanos/`);


            if (dato.status === 200) {
                setContacts(dato.data.contactanos)
            }

        }

        loadContacts();

    }, [])
    const ConsultarObjeto = async (id) => {
        try {
            const dato = await clienteAxios.get(`/contactanos/${id}`);
            setobjetoSeleccionado(dato.data.contactanos)
            console.log(objetoSeleccionado)

        } catch (error) {
            console.log(error)
        }
    }
    const openCloseModalModificar = () => setShowModalModificar(!showModificar)
    const ObjetoSeleccionado = (id) => {
        ConsultarObjeto(id)
        openCloseModalModificar()

    }
    const modalContentModificar = (
        <Modal.Card>
            <Modal.Card.Header>
                <Modal.Card.Title>
                    Modificar contacto
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
    const Eliminarcontactanos = async (id) => {
        try {
            const response = await clienteAxios.delete(`/contactanos/${id}`)
            setContacts(contacts.filter(contacts => contacts.id_contactanos !== id))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {modalModificar}

            <div >
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth  ">
                    <tr>
                        <th>
                            mail
                    </th>
                        <th>
                            consulta
                    </th>
                        <th>

                            <button
                                onClick={OpenModal}
                                className=' submit button  is-success'>
                                Agregar
			</button>
                        </th>
                    </tr>
                    {contacts.map(item => (
                        <tr key={item.id_contactanos} >
                            <td>
                                {item.email}
                            </td>
                            <td>
                                {item.pregunta}
                            </td>
                            <td>
                                <button
                                    className='button is-warning '
                                    onClick={() => ObjetoSeleccionado(item.id_contactanos)}
                                >
                                    Modificar
			            </button>
                                <button
                                    className='button is-danger '
                                    onClick={() => Eliminarcontactanos(item.id_contactanos)}>
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

export default Listcontac
