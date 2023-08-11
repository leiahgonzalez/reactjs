import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom';


export const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);

    
    const imgCarrito = "https://thumbs.dreamstime.com/b/icono-de-las-compras-del-carro-la-compra-en-fondo-oscuro-116659167.jpg"
    return (
    <div>

      <Link to="/cart">
        <img className='imgCarrito' src={imgCarrito} alt='carrito'/>
        {
          cantidadTotal > 0 && <strong className='cantidad'> {cantidadTotal}</strong>


        }
    
      </Link>
    </div>
  )
}

export default CartWidget;
