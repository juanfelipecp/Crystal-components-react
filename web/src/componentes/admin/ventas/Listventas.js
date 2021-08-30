import React, { useState, useEffect } from 'react'
import clienteAxios from '../../../config/axios'
import { Modal } from 'react-bulma-components'
import FormModal from './FormModal'
import FormModificar from './FormModificar'

const Listmv = () => {
    const [modal, setModal] = useState(false);
    const [ventas, setVentas] = useState([])
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
    async function loadVentas() {
        const dato = await clienteAxios.get(`/ventas/`);


        if (dato.status === 200) {
            setVentas(dato.data.ventas)
        }

    }
    const ConsultarObjeto = async (id) => {
        try {
            const dato = await clienteAxios.get(`/ventas/${id}`);
            setObjetoSeleccionado(dato.data.ventas)
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
                    Modificar ventas
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
    const Eliminarventas = async (id) => {
        try {
            const response = await clienteAxios.delete(`/ventas/${id}`)
            setVentas(ventas.filter(ventas => ventas.id_ventas !== id))
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {



        loadVentas();

    }, [])


    return (
        <div>
            {modalModificar}
            <div>
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth  ">
                <tr>
                    <th>
                    mes
                    </th>
                    <th>
                    numero
                    </th>
                    <th>
                        
                       <button
				onClick={OpenModal}
				className=' submit button  is-success'>
				Agregar
			</button>
                    </th>
                </tr>
                {ventas.map(item => (
                    <tr key={item.id_ventas} >
                        <td>
                            {item.mes}
                        </td>
                        <td>
                            {item.numero}
                        </td>
                        <td>
                        <button
				            className=' button is-warning '
                            onCLick={()=>ObjetoSeleccionado(item.id_ventas)}>
				            Modificar
			            </button>
                        <button
				            className='  button is-danger '
                            onClick={() => Eliminarventas(item.id_ventas)}>
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
