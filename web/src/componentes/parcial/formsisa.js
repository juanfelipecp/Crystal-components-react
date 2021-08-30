import React, { useState, useEffect } from 'react';
import { addEmpleado, getEmpleado, updateEmpleado } from '../services';

function FormModal(props) {
	const { closeModal, id } = props;
	const [form, setForm] = useState({
		nombre: '',
		apellido: '',
		documento: '',
		salario: 0,
	});

	const changeForm = (field, value) => {
		setForm({ ...form, [field]: value });
	};

	const submit = async (event) => {
		event.preventDefault(); // evita que se recargue la página
		if (id == 0) {
			await addEmpleado(form);
		} else {
			await updateEmpleado(form, id);
		}
		closeModal(true);
        
	};
    console.log(form)

	async function loadEmpleado() {
		const cls = await getEmpleado(id);
		console.log(cls);
		if (cls.status === 200) {
			setForm(cls.data.datos);
		}
	}

	useEffect(() => {
		debugger;
		if (id != 0) {
			loadEmpleado();
		}
	}, []);

	return (
		<div className='container pt-4'>
			<div className='row'>
				<div className='colg-lg-6'>
					<div className='card text-center'>
						<div className='card-body'>
							<h3>Actualizar ...</h3>

							<span className='badge badge-danger text-danger'>
								TODOS LOS CAMPOS SON OBLIGATORIOS
							</span>
							<form className='mt-4' onSubmit={submit}>
								<div className='row'>
									<div className='col'>
										<input
											type='text'
											className='form-control form-control-lg'
											value={form.nombre}
											required
											onChange={(event) => {
												changeForm(
													'nombre',
													event.target.value // le pasamos el valor
												);
											}}
											placeholder='Nombre'
										/>
									</div>
									<div className='col'>
										<input
											type='text'
											className='form-control form-control-lg'
											value={form.apellido}
											required
											onChange={(event) => {
												changeForm(
													'apellido',
													event.target.value
												);
											}}
											placeholder='Apellido'
										/>
									</div>
								</div>
								<input
									type='text'
									className='form-control form-control-lg mt-3'
									value={form.documento}
									required
									onChange={(event) => {
										changeForm(
											'documento',
											event.target.value
										);
									}}
									placeholder='Documento'
								/>
								<input
									type='number'
									className='form-control form-control-lg mt-3'
									value={form.salario}
									required
									onChange={(event) => {
										changeForm(
											'salario',
											event.target.value
										);
									}}
									placeholder='Salario'
								/>
								<div className='mt-3'>
									<button
										type='text'
										className='btn btn-danger btn-lg mt-2 mx-3'
										onClick={() => closeModal()}>
										Cancelar
									</button>
									<button
										type='submit'
										className='btn btn-primary btn-lg mt-2'>
										Actualizar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FormModal;