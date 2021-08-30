import React, { useEffect, useState } from 'react';
import { getEmpleados, deleteEmpleado } from '../../services'; //deleteEmpleado
import { Modal } from 'react-bulma-components';
import FormModal from '../FormModal';
function Tabla() {
	const [listar, setListar] = useState([]);
	const [modal, setModal] = useState(false);
	const [id, setId] = useState(0); // Este id es para editar el elemento
	const OpenModal = () => {
		setModal(true);
	};
	const CloseModal = (result) => {
		if (result) {
			loadListarxd();
		}
		setModal(false);
		setId(0);
	};

	async function loadListarxd() {
		const cls = await getEmpleados();
		console.log(cls);
		if (cls.status === 200) {
			setListar(cls.data.datos);
		}
	}
	const updateEmpleado = (id) => {
		setId(id);
		OpenModal();
	};

	const eliminar = async (id) => {
		await deleteEmpleado(id);
		await loadListarxd();
	};

	useEffect(() => {
		loadListarxd();
	}, []);
	return (
		<div className='container mt-4'>
			<div className='card'>
				<div className='card-body'>
					<span className='h3'>Listado de empleados</span>

					<table className='table table-striped mt-5'>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Documento</th>
								<th>Salario</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{listar.map((item) => (
								<tr key={item.id}>
									<td>{item.nombre}</td>
									<td>{item.documento}</td>
									<td>{item.salario}</td>
									<td>
										<i
											className='fas fa-edit mx-2 text-info'
											onClick={() =>
												updateEmpleado(item.id)
											}></i>
										<i
											className='fas fa-trash-alt mx-2 text-danger'
											onClick={() =>
												eliminar(item.id)
											}></i>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<button
						onClick={OpenModal}
						className='btn btn-success btn-lg m-auto w-100'>
						Agregar
					</button>
				</div>
			</div>
			<Modal show={modal} onClose={CloseModal}>
				<Modal.Content>
					<FormModal closeModal={CloseModal} id={id} />
				</Modal.Content>
			</Modal>
		</div>
	);
}

export default Tabla;