import React, { useState, useEffect } from 'react'
import { getVentas } from '../servicios'

const Listarventas = () => {
    const [venta, setVenta] = useState([])
    useEffect(() => {

        async function loadVenta() {

            const datos = await getVentas();
            console.log(datos);

            if (datos.status === 200) {
                setVenta(datos.data.ventas)
            }
        }

        loadVenta();

    }, [])


    return (
        <div>
            {
                venta.map((item) => (
                    <div key={item.ventas} >
                        {item.mes},
                    </div>
                ))
            }


        </div>)

}

export default Listarventas