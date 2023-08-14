import React from 'react'
import { useState, useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'


const Checkout = () => {
    const {carrito, vaciarCarrito, cantidadTotal} = useContext(CarritoContext);
    const {nombre, setNombre} = useState("");
    const {apellido, setApellido} = useState("");
    const {telefono, setTelefono} = useState("");
    const {mail, setMail} = useState("");
    const {mailConfirmacion, setMailConfirmacion} = useState("");
    const {error, setError} = useState("");
    const {orderId, setOrderId} = useState("");

    const manejadorFormulario = (e) => {
        e.preventDefault();
        if(!nombre || !apellido || !telefono || !mail || !mailConfirmacion ) {
            setError("Por favor complete todos los campos");
            return;
        }

        if(mail !== mailConfirmacion) {
            setError("Los campos del mail no coinciden");
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: cantidadTotal,
            nombre, 
            apellido,
            telefono,
            mail
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrderId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden");

            })
            

    }




  return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={manejadorFormulario}>
            {carrito.map(producto => (
                <div>
                    <p>
                        {producto.item.nombre} x {producto.cantidad}
                    </p>
                    <p>
                        Precio $ {producto.item.precio}
                        <hr/>
                    </p>
                </div>
            ))}
            <hr/>

            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type='text' value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='apellido'>Apellido</label>
                <input type='text' value={apellido} onChange={(e)=>setApellido(e.target.value)} />
            </div>
            <div>
                <label htmlFor='telefono'>Telefono</label>
                <input type='text' value={telefono} onChange={(e)=> setTelefono(e.target.value)} />
            </div>
            <div>
                <label htmlFor='mail'>Mail</label>
                <input type='text' value={mail} onChange={(e)=> setMail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='mailconfirmacion'>Confirmacion Mail</label>
                <input type='text' value={mailConfirmacion} onChange={(e)=>setMailConfirmacion(e.target.value)} />
            </div>

            {
                error && <p style={{color:"red"}}>{error}</p>
            }
            <button type='submit'>Finalizar Compra </button>

        </form>

        {
            orderId && (
                <strong>Gracias por tu compra! Tu numero de orden es {orderId}</strong>
            )
        }


    </div>
  )
}

export default Checkout