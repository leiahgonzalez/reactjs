import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';



export const NavBar = () => {
  return (
    <header>
    <h1>The Shoe Store</h1>

    <nav>
        <ul>
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