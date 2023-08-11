import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (
    <header>
      <Link to={"/"} className='header'>
        <h1 className='titulo'>The Shoe Store</h1>
        <img className='logoinicio' src='https://i.pinimg.com/originals/64/31/ed/6431eda72c9929b1b28405c2df11be19.jpg' alt='logo'/>
      </Link>
    <nav>
        <ul>
            <li>
              <NavLink to={"/"} className='lista'>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to={"/categoria/2"} className='lista'>
                Moda
              </NavLink>
            </li>
            <li>
              <NavLink to={"/categoria/3"} className='lista'>
                Running
              </NavLink>

            </li>
            <li>
              <NavLink to={"/categoria/4"} className='lista'>
                Sandalias
              </NavLink>
            </li>
        </ul>
    </nav>

    <CartWidget/>
    </header>

    
  )
}

export default NavBar