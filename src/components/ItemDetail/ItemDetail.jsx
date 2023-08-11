import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

import { CarritoContext } from "../../Context/CarritoContext"

import React from 'react'


const ItemDetail = ({id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);



  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    
    console.log("productos agregados> " + cantidad);
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);

  }

  
  
  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid itaque labore soluta quae aliquam, temporibus sapiente, alias obcaecati rerum laboriosam praesentium debitis dolorum quidem impedit, natus vitae voluptas non.</p>
        <img src={img} alt={nombre}/>

        
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    
    
    
    
    
    </div>
  )
}

export default ItemDetail









// const ItemDetail = ({id, nombre, precio, img, stock}) => {
//     const [agregarCantidad, setAgregarCantidad] = useState(0);

//     const {agregarProducto} = useContext(CarritoContext);



//     const manejadorCantidad = (cantidad) => {
//         setAgregarCantidad(cantidad);
        
//         const item = {id, nombre, precio};
//         agregarProducto(item, cantidad);

//     }
  
  
  
  
//     return (
//         <div className='contenedorItem'>
//             <h2>Nombre: {nombre} </h2>
//             <h3>Precio: {precio} </h3>
//             <h3>ID: {id} </h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vitae eveniet odio voluptate perferendis ipsum placeat distinctio error iusto quidem quae, minus porro beatae accusantium facere consectetur nesciunt quam iure!</p>
//             <img src={img} alt={nombre} />

//             {

//             }
//             {
//                 agregarCantidad > 0 ? (<Link to='/cart'> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
//             }


//         </div>
//   )
// }

// export default ItemDetail