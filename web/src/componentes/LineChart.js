import React, { useRef, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { getPrecios } from '../servicios'



const LineChart = () => {
  const [precios, setPrecios] = useState([])

  const [dataChart, setDataChart] = useState({});

  const ListarPrecios = async () => {
    
    
    const dolar = [];
    const cop = [];


    const response = await getPrecios();
    console.log(response);
    setPrecios(response.data.precios)

    for (const x of response.data.precios) {
      dolar.push(parseFloat(x.dolar));
      cop.push(parseFloat(x.cop));

    }
    console.log(dolar);
    console.log(cop);
   
    

    
    setDataChart  ({
      labels: dolar,
      datasets: [
        {
          label: 'valor del dolar en la actualidad',
          data: cop,
          backgroundColor: [
            'rgba(255, 131, 0, 0.4)',

          ],
          borderColor: [
            'rgba(255, 131, 0, 1)',
          ],
          borderWidth: 3,
        },
      ],
    });
  }
  useEffect(async () => {
    ListarPrecios()
  }, [])
  const myRef = useRef();



  return (
    <div>
      <Line ref={myRef} data={dataChart} width={200} height={100}></Line>
    </div>
  )
}

export default LineChart
