import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import { getDoc, doc } from "firebase/firestore"
// import { db } from "../../firebase/config"
import { getUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(res => setProducto(res))
            .catch(error => console.log(error))
    },[idItem])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>

    )
}


export default ItemDetailContainer


// const ItemDetailContainer = () => {
//     const [producto, setProducto] = useState(null);
//     const {idItem} = useParams();

//    useEffect(() => {
//         const nuevoDoc = doc(db, "inventario", idItem);

//         getDoc(nuevoDoc)
//             .then(res => {
//                 const data = res.data();
//                 const nuevoProducto = {id:res.id, ...data};
//                 setProducto(nuevoProducto);
//             })
//             .catch(error => console.log(error))

//    }, [idItem])
  
  
  
  
//     return (
//         <div>
//             <itemDetail {...producto}/>
//         </div>
//   )
// }

// export default ItemDetailContainer