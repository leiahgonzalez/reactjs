import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';



export const NavBar = () => {
  return (
    <header>
    <h1 className='titulo'>The Shoe Store</h1>
    <img className='logoinicio' src='https://i.pinimg.com/originals/64/31/ed/6431eda72c9929b1b28405c2df11be19.jpg' alt='logo'/>

    <nav>
        <ul>
            <li>Inicio</li>
            <li>Moda</li>
            <li>Running</li>
            <li>Sandalias</li>
        </ul>
    </nav>

    <CartWidget/>
    </header>
  )
}

export default NavBar