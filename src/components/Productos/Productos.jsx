import { useState, useEffect } from "react"

import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/config"



const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect( ()=>{

        const misProductos = query(collection(db, "productos"))

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })

    },[productos])


    const descontarStock = async(producto) => {
        const productoRef = doc(db, "productos", producto.id);
        const nuevoStock = producto.stock - 1;

        await updateDoc(productoRef, {stock: nuevoStock});
    }


return (
    <>
        <h2>Productos</h2>
        <div className="productos-container">
            {
                productos.map(producto => (
                    <div className="producto-card">
                        <h2> {producto.nombre} </h2>
                        <p> Precio:  ${producto.precio} </p>
                        <p> Stock: {producto.stock} </p>
                        <button onClick={() => descontarStock(producto)}> Comprar </button>
                    </div>
                ))

            }

        </div>

    </>
)

}

export default Productos