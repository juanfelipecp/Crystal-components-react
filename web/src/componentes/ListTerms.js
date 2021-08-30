import React, { useState, useEffect } from 'react'
import clienteAxios from '../config/axios'
import '../css/estilo.css'

const ListTerm = () => {
    const [term, setTerm] = useState([])


    async function loadTerm() {
        const dato = await clienteAxios.get(`/term/`);


        if (dato.status === 200) {
            setTerm(dato.data.term)
        }

    }


    useEffect(() => {



        loadTerm();

    }, [])


    return (
        <div>
            <p class="titulo_term">Terminos Y condiciones</p>
            {term.map(item => (
                <p class="redfont subtitulos" key={item.id_term}>{item.term}</p>
            ))}
        </div>
    )
}

export default ListTerm
