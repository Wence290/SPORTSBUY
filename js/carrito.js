const carritoProductos = []

const agregarAlCarrito = (productoId)=>{
    if(productoId > 0){
        let productoEncontrado = productos.find((producto)=> producto.id === parseInt(productoId))
        if (productoEncontrado !== undefined){
            carritoProductos.push(productoEncontrado)
            console.table(carritoProductos)
        }
    }
}