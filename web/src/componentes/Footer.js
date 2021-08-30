import React, { useState } from 'react'
import ListRedes from './Listaredes'
import clienteAxios from '../config/axios'
import { useHistory } from 'react-router-dom'
import { Modal } from 'react-bulma-components'
import '../css/estilo.css'
import ListTerm from './ListTerms'

const Footer = () => {
    const history = useHistory()
    const [formulario, setFormulario] = useState({
        email: '',
        pregunta: ''
    })
    const [modal, setModal] = useState(false);

    const OpenModal = () => {
        setModal(true);
    };

    const CloseModal = (result) => {
        if (result) {

        }
        setModal(false);
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        const { email, pregunta } = formulario
        if (email == '' || pregunta == '') {

        }
        else {
            await clienteAxios.post('/contactanos', { email, pregunta })
            history.push('/')
        }
    }
    const onChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div >
            <footer class=" negro ">
                <div class="content has-text-centered ">

                    <table>
                        <tr>
                            <td>
                                <div class="card-content is-3">
                                    <div class="content">
                                        <form onSubmit={onSubmit}>
                                            <div class="field">

                                                <label class=" negro">Contactanos</label>

                                                <div class="control has-icons-left has-icons-right">
                                                    <input class="input" type="email" placeholder="email" name="email" onChange={onChange} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-envelope fa-xs"></i>
                                                    </span>
                                                    <span class="icon is-small is-right">
                                                        <i class="fas fa-check fa-xs"></i>
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="field">
                                                <div class="control has-icons-left has-icons-right">
                                                    <input class="input" type="text" placeholder="pregunta" name="pregunta" onChange={onChange} />
                                                    <span class="icon is-left">
                                                        <i class="fas fa-envelope"></i>
                                                    </span>
                                                    <span class="icon is-right">
                                                        <i class="fas fa-check"></i>
                                                    </span>
                                                </div>
                                                <button class="submit button negro negroo ">enviar</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div class="negro">
                                    <label class="negroo"> Redes sociales</label>
                                </div>

                                <ListRedes />
                                <a
                                onClick={OpenModal}
                                className='negro'>
                                Terminos y Condiciones 
			                </a>
                                <Modal show={modal} onClose={CloseModal}>
                                    <Modal.Content>
                                        <ListTerm closeModal={CloseModal} />
                                    </Modal.Content>
                                </Modal>

                            </td>
                        </tr>
                    </table>



                </div>
            </footer>

        </div>
    )
}

export default Footer
