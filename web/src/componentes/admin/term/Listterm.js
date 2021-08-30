import React, { useState, useEffect } from 'react'
import clienteAxios from '../../../config/axios'
import { Modal } from 'react-bulma-components'
import FormModal from './FormModal'
import FormModificar from './FormModificar'

const Listproductos = () => {
    const [modal, setModal] = useState(false);
    const [term, setTerm] = useState([])
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
    async function loadTerm() {
        const dato = await clienteAxios.get(`/term/`);


        if (dato.status === 200) {
            setTerm(dato.data.term)
        }

    }
    const ConsultarObjeto = async (id) => {
        try {
            const dato = await clienteAxios.get(`/term/${id}`);
            setObjetoSeleccionado(dato.data.term)
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
                    Modificar terminos y condiciones
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
    const Eliminarterm = async (id) => {
        try {
            const response = await clienteAxios.delete(`/term/${id}`)
            setTerm(term.filter(term => term.id_term !== id))
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        loadTerm();

    }, [])


    return (
        <div>
            {modalModificar}
            <div >
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth  ">
                    <tr>
                        <th>
                        terminos
                    </th>
                        <th>

                            <button
                                onClick={OpenModal}
                                className=' submit button  is-success'>
                                Agregar
			                </button>
                        </th>
                    </tr>
                    {term.map(item => (
                        <tr key={item.id_term} >
                            <td>
                                {item.term}
                            </td>
                            <td>
                                <button
                                    className=' button is-warning '
                                    onClick={()=>ObjetoSeleccionado(item.id_term)}>
                                    Modificar
			            </button>
                                <button
                                    className='  button is-danger '
                                    onClick={() => Eliminarterm(item.id_term)}>
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
