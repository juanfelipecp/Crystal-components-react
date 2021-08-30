import React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/axios'




const Listparcial = () => {
    
    const [parcial, setparcial] = useState([])


    useEffect (async() => {
        const listarparcial =async() =>{
            const response = await clienteAxios.get(`/parciaal/:nombre`);
            console.log(response)
            setparcial(response.data.parcial) 
        }
        listarparcial()
    }

    , [])


    return (
        <div>
            <div class="colums">
                {
                    parcial.map(parcial=>{
                        return(
                            <table class="table is-bordered">
                            <tr>
                                <th> 
                                    nombre
                                </th>
                                <th> 
                                    pelicula
                                </th>
            
            
                            </tr>
                            <tr>
            
                                
                                <td>
                                    
                                </td>
            
                                <td>
                                    
                                </td>
            
            
                            </tr>
            
            
                        </table>
                       
                        
                        )
                    })
                }
            </div>
                    
                    
        </div> )
        
}





export default Listparcial
