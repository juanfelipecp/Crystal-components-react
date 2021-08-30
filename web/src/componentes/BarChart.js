import React, { useRef, useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { getVentas } from '../servicios'



const BarChart = () => {
  const [ventas, setVentas] = useState([])

  const [dataChart, setDataChart] = useState({});

  const ListarVentas = async () => {
    
    
    const mes = [];
    const numero = [];


    const response = await getVentas();
    console.log(response);
    setVentas(response.data.ventas)

    for (const csc of response.data.ventas) {
      mes.push(csc.mes);
      numero.push(parseInt(csc.numero));

    }

   
    

    
    setDataChart  ({
      labels: mes,
      datasets: [
        {
          label: 'Ventas usuario',
          data: numero,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(235, 248, 6, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(188, 242, 209, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(104, 248, 6, 0.7)',
            'rgba(223, 193, 243, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(251, 200, 53 ,0.7)',

          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(235, 248, 6, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(188, 242, 209, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(104, 248, 6, 1)',
            'rgba(223, 193, 243, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(251, 200, 53 ,1)'
          ],
          borderWidth: 2,
        },
      ],
    });
  }
  useEffect(async () => {
    ListarVentas()
  }, [])
  const myRef = useRef();



  return (
    <div>
      <Bar ref={myRef} data={dataChart} width={200} height={100}></Bar>
    </div>
  )
}

export default BarChart
