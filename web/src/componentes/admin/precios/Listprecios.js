import React, { useState, useEffect } from 'react'
import clienteAxios from '../../../config/axios'
import { Modal } from 'react-bulma-components'
import FormModal from './FormModal'
import FormModificar from './FormModificar'

const Listmv = () => {
    const [modal, setModal] = useState(false);
    const [precios, setPrecios] = useState([])
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
    async function loadPrecios() {
        const dato = await clienteAxios.get(`/precios/`);


        if (dato.status === 200) {
            setPrecios(dato.data.precios)
            
        }

    }
    const ConsultarObjeto = async (id) => {
        try {
            const dato = await clienteAxios.get(`/precios/${id}`);
            setObjetoSeleccionado(dato.data.precios)
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
                    Modificar precios
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
    const Eliminarprecios = async (id) => {
        try {
            const response = await clienteAxios.delete(`/precios/${id}`)
            setPrecios(precios.filter(precios => precios.id_precio !== id))
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        loadPrecios();

    }, [])


    return (
        <div>
            {modalModificar}
            <div >
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth  ">
                <tr>
                    <th>
                        dolar
                    </th>
                    <th>
                        peso colombiano
                    </th>
                    <th>
                        
                       <button
				onClick={OpenModal}
				className=' submit button  is-success'>
				Agregar
			</button>
                    </th>
                </tr>
                {precios.map(item => (
                    <tr key={item.id_precio} >
                        <td>
                            {item.dolar}
                        </td>
                        <td>
                            {item.cop}
                        </td>
                        <td>
                        <button
				            className=' button is-warning '
                            onClick={() => ObjetoSeleccionado(item.id_precio)}>
				            Modificar
			            </button>
                        <button
				            className='  button is-danger '
                            onClick={() => Eliminarprecios(item.id_precio)}>
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

export default Listmv
