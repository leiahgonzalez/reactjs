import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);


  const {idCategoria} = useParams();

  useEffect( () => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");
  

    getDocs(misProductos)
      .then( res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return {id: doc.id, ...data}
      })
      setProductos(nuevosProductos);
    })
    .catch(error => console.log(error))
  },[idCategoria])
  
    



  return (
    <div>
      <h2 style={{textAlign: "center"}}> Mis Productos</h2>
      <ItemList productos={productos}/>
     


    </div>
  )
}

export default ItemListContainer




