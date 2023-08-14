import './App.css';


import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import Running from './components/Running/Running';
import Moda from './components/Moda/Moda';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Productos from './components/Productos/Productos';
import { CarritoProvider } from './Context/CarritoContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  return(
    <>
      
        <BrowserRouter>
          <CarritoProvider> 
           
            <NavBar/>
          
            <Routes>
              <Route path='/' element = {<ItemListContainer/>} />
              <Route path='/moda' element = {<Moda/>}/>
              <Route path='/running' element = {<Running/>}/>
              <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
              <Route path='/item/:idItem' element={<ItemDetailContainer />} />
              <Route path='/cart' element = {<Cart/>} />
              <Route path='/checkout' element = {<Checkout/>}/>
            </Routes>
          </CarritoProvider>
        </BrowserRouter>
       
        
    </>
  )

}


export default App;
