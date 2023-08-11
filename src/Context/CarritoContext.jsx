


import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})


export const CarritoProvider = ({children}) => {
    const [carrito, setcarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    console.log(carrito);

    const agregarProducto = (item, cantidad) => {

        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setcarrito(prev => [...prev, {item, cantidad}]);
        
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));

        } else{
            const carritoActualizado = carrito.map ( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad};

                } else {
                    return prod;
                }
            });
            setcarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => (item.precio * cantidad));
        }
    }


    const eliminarPoducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setcarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));

    }

    const vaciarCarrito = () => {
        setcarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }


    return(
         <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarProducto, eliminarPoducto, vaciarCarrito}}>

            {children}
         </CarritoContext.Provider>
    )
}
