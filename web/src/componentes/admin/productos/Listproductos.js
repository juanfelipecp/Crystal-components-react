import React, { useState, useEffect } from 'react'
import clienteAxios from '../../../config/axios'
import { Modal } from 'react-bulma-components'
import FormModal from './FormModal'
import FormModificar from './FormModificar'


const Listproductos = () => {
    const [modal, setModal] = useState(false);
    const [productos, setProductos] = useState([])
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
    const ConsultarObjeto = async (id) => {
        try {
            const dato = await clienteAxios.get(`/productos/${id}`);
            setObjetoSeleccionado(dato.data.productos)
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
                    Modificar productos
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

    async function loadProductos() {
        const dato = await clienteAxios.get(`/productos/`);


        if (dato.status === 200) {
            setProductos(dato.data.productos)
        }

    }
    const Eliminarprecios = async (id) => {
        try {
            const response = await clienteAxios.delete(`/productos/${id}`)
            setProductos(productos.filter(productos => productos.id_productos !== id))
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        loadProductos();

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
                    descripcion
                    </th>
                    <th>
                    id_tipos 
                    </th>
                    <th>
                    precio 
                    </th>
                    <th>
                    img
                    </th>
                    <th>
                        
                        <button
				onClick={OpenModal}
				className=' submit button  is-success'>
				Agregar
			</button>
                    </th>
                </tr>
                {productos.map(item => (
                    <tr key={item.id_productos} >
                        <td>
                            {item.nombre}
                        </td>
                        <td>
                            {item.descripcion}
                        </td>
                        <td>
                            {item.id_tipos}
                        </td>
                        <td>
                            {item.precio}
                        </td>
                        <td>
                            <img src={item.img} style={{ width: 250, height: 150 }} ></img>
                            
                        </td>
                        <td>
                        <button
				            className=' button is-warning '
                            onClick={() => ObjetoSeleccionado(item.id_productos)}>
				            Modificar
			            </button>
                        <button
				            className='  button is-danger '
                            onClick={() => Eliminarprecios(item.id_productos)}>
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
