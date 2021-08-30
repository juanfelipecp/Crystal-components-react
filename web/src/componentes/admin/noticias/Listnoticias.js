import React, { useState, useEffect } from 'react'
import clienteAxios from '../../../config/axios'
import { Modal } from 'react-bulma-components'
import FormModal from './FormModal'
import FormModificar from './FormModificar'

const Listnoticias = () => {
    const [modal, setModal] = useState(false);
    const [noticias, setNoticias] = useState([])
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
    async function loadNoticias() {
        const dato = await clienteAxios.get(`/noticias/`);


        if (dato.status === 200) {
            setNoticias(dato.data.noticias)
        }

    }

    const ConsultarObjeto = async (id) => {
        try {
            const dato = await clienteAxios.get(`/noticias/${id}`);
            setObjetoSeleccionado(dato.data.noticias)
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
                    Modificar noticias
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

    const Eliminarnoticias = async (id) => {
        try {
            const response = await clienteAxios.delete(`/noticias/${id}`)
            setNoticias(noticias.filter(noticias => noticias.id_noticias !== id))
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        loadNoticias();

    }, [])


    return (
        <div>
            {modalModificar}

            <div >
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth  ">
                <tr>
                    <th>
                        titulo
                    </th>
                    <th>
                        descripcion
                    </th>
                    <th>
                        imagen
                    </th>
                    <th>
                        
                       <button
				onClick={OpenModal}
				className=' submit button  is-success'>
				Agregar
			</button>
                    </th>
                </tr>
                {noticias.map(item => (
                    <tr key={item.id_noticias} >
                        <td>
                            {item.titulo}
                        </td>
                        <td>
                            {item.descripcion}
                        </td>
                        <td>
                           <img src={item.img} style={{ width: 170, height: 140 }}/>
                        </td>
                        <td>
                        <button
				            className=' button is-warning '
                            onClick={() => ObjetoSeleccionado(item.id_noticias)}>
				            Modificar
			            </button>
                        <button
				            className='  button is-danger '
                            onClick={() => Eliminarnoticias(item.id_noticias)}>
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

export default Listnoticias
