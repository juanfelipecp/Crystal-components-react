import React, { useState, useEffect } from 'react'
import clienteAxios from '../../../config/axios'
import { Modal, Button } from 'react-bulma-components'
import FormModal from './FormModal'
import FormModificar from './FormModificar'

const Listmv = () => {
    const [modal, setModal] = useState(false);
    const [mv, setMv] = useState([])
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
    async function loadMv() {
        const dato = await clienteAxios.get(`/mv/`);


        if (dato.status === 200) {
            setMv(dato.data.m_v)
        }

    }
    const ConsultarObjeto = async (id) => {
        try {
            const dato = await clienteAxios.get(`/mv/${id}`);
            setObjetoSeleccionado(dato.data.mv)
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
                    Modificar mision y vision
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

    const Eliminarmv = async (id) => {
        try {
            const response = await clienteAxios.delete(`/mv/${id}`)
            setMv(response.filter(mv => mv.id_mv !== id))
            loadMv();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadMv();

    }, [])


    return (
        
        <div>
           { modalModificar}

            <div >
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth  ">
                <tr>
                    <th>
                        Mision
                    </th>
                    <th>
                        vision
                    </th>
                    <th>
                        
                       <button
				onClick={OpenModal}
				className=' submit button  is-success'>
				Agregar
			</button>
                    </th>
                </tr>
                {mv.map(item => (
                    <tr key={item.id_mv} >
                        <td>
                            {item.mision}
                        </td>
                        <td>
                            {item.vision}
                        </td>
                        <td>
                        <Button
				            className=' button is-warning '
                            onClick={()=> ObjetoSeleccionado(item.id_mv)}
                            >
				            Modificar
			            </Button>
                        <Button
				            className='  button is-danger '
                            onClick={() => Eliminarmv(item.id_mv)}>
				        eliminar
			            </Button>
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

export default Listmv
