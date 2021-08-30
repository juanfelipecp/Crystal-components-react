import React, { useState, useEffect } from 'react'
import clienteAxios from '../../../config/axios'
import { Modal } from 'react-bulma-components'
import FormModal from './FormModal'
import FormModificar from './FormModificar'

const Listproductos = () => {
    const [modal, setModal] = useState(false);
    const [redes, setRedes] = useState([])
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
    async function loadRedes() {
        const dato = await clienteAxios.get(`/redes/`);


        if (dato.status === 200) {
            setRedes(dato.data.redes)
        }

    }
    const ConsultarObjeto = async (id) => {
        try {
            const dato = await clienteAxios.get(`/redes/${id}`);
            setObjetoSeleccionado(dato.data.redes)
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
                    Modificar redes
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
    const Eliminarredes = async (id) => {
        try {
            const response = await clienteAxios.delete(`/redes/${id}`)
            setRedes(redes.filter(redes => redes.id_redes !== id))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadRedes();

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
                        imagen
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
                    {redes.map(item => (
                        <tr key={item.id_redes} >
                            <td>
                                {item.nombre}
                            </td>
                            <td>
                                <img src={item.imagen} style={{ width: 35, height: 35 }} ></img>
                            
                            </td>
                            <td>
                                {item.link}
                            </td>
                            <td>
                                <button
                                    className=' button is-warning '
                                    onClick={()=> ObjetoSeleccionado(item.id_redes)}>
                                    Modificar
			            </button>
                                <button
                                    className='  button is-danger '
                                    onClick={() => Eliminarredes(item.id_redes)}>
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
