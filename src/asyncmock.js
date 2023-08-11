const misProductos = [
    {id: "1", nombre:"Nike", stock:10, precio: 100, img: "https://nikearprod.vtexassets.com/arquivos/ids/699261-800-800?v=638229666028100000&width=800&height=800&aspect=true", idCat:"2" },
    {id: "2", nombre:"Adidas", stock:10, precio: 100, img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Zapatillas_Superstar_Blanco_EG4958_01_standard.jpg", idCat:"2" },
    {id: "3", nombre:"Vans", stock:10, precio: 100, img:"https://grimoldimediamanager.grimoldi.com/MediaFiles/Grimoldi/2021/8_5/0/107/28/7019768.jpg", idCat:"3" },
    {id: "4", nombre:"Converse", stock:10, precio: 100, img:"https://www.izapatillas.com/24200-large_default/comprar-zapatilla-converse-mujer-allstar-m7652-102-bco.jpg", idCat:"3"},
]

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout( () => {
            res(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}

