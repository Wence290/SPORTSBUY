const container = document.querySelector('div.container')

retornarCardHtml = (producto) => {
    return `<div class="card text-bg-dark" data-bs-toggle="tooltip>
                <div class="card-body">
                    <img src= ${producto.imagen} class="card-img-top" />
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">
                    ${producto.descripcion}
                    </p>
                    <p class="card-price">
                    ${producto.precio}
                    </p>
                    <button class="button button-outline button-add" id=${producto.id} title="Agregar al carrito">AGREGAR AL CARRITO</button>
                </div>
            </div>`
}

function activarClickEnBotones(productos) {
    container.addEventListener("click", async (e) => {
      if (e.target.tagName === "BUTTON" && e.target.dataset.id) {
        const productoSeleccionado = productos.find(
          (producto) => producto.id === parseInt(e.target.dataset.id)
        );
        if (productoSeleccionado) {
          await agregarProducto(productoSeleccionado);
          alert("Producto agregado al carrito");
        }
      }
    });
  }

const cargarProductos = (array) => {
    if(array.length > 0){
        array.forEach(producto => {
            container.innerHTML += retornarCardHtml(producto)
        })
        activarClickEnBotones()
    }
}

cargarProductos(productos)