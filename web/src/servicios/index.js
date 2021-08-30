import axios from 'axios'
import clienteAxios from '../config/axios'
const baseurl_productos = process.env.REACT_APP_BASE_URL







const baseurl_tipos = process.env.REACT_APP_BASE_URL_tipo
export async function getTipos(){
    try{
 
         const response = await axios({
             url:`${baseurl_tipos}`,
             method:'GET'
 
         });
 
         return response
 
    } catch(e){
 
     console.log(e);
 
    }
 
 }

 
 const baseurl_mv = process.env.REACT_APP_BASE_URL_mv
 export async function getM_v(){
    try{
 
         const response = await axios({
             url:`${baseurl_mv}`,
             method:'GET'
 
         });
 
         return response
 
    } catch(e){
 
     console.log(e);
 
    }
 
 }


 const baseurl_provedores = process.env.REACT_APP_BASE_URL_proveedores

 export async function getPorveedores(){
    try{
 
         const response = await axios({
             url:`${baseurl_provedores}`,
             method:'GET'
 
         });
 
         return response
 
    } catch(e){
 
     console.log(e);
 
    }
 
 }

 const baseurl_ventas = process.env.REACT_APP_BASE_URL_ventas

 export async function getVentas(){
    try{
 
         const response = await axios({
             url:`${baseurl_ventas}`,
             method:'GET'
 
         });
 
         return response
 
    } catch(e){
 
     console.log(e);
 
    }
 
 }

 const baseurl_noticias = process.env.REACT_APP_BASE_URL_noticias

 export async function getNoticias(){
    try{
 
         const response = await axios({
             url:`${baseurl_noticias}`,
             method:'GET'
 
         });
 
         return response
 
    } catch(e){
 
     console.log(e);
 
    }
 
 }

 const baseurl_contactanos = process.env.REACT_APP_BASE_URL_contactanos

 export async function postContactanos(){
    try{
 
         const response = await axios({
             url:`${baseurl_contactanos}`,
             method:'POST'
 
         });
 
         return response
 
    } catch(e){
 
     console.log(e);
 
    }
 
 }

 const baseurl_redes = process.env.REACT_APP_BASE_URL_redes

 export async function getRedes(){
    try{
 
         const response = await axios({
             url:`${baseurl_redes}`,
             method:'GET'
 
         });
 
         return response
 
    } catch(e){
 
     console.log(e);
 
    }
 
 }

 export async function getPrecios(){
     try{
  
          const response = await clienteAxios.get('/precios');
          return response
  
     } catch(e){
  
      console.log(e);
  
     }
  
  }




  