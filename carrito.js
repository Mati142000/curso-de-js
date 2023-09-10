
const containerCarrito = document.querySelector(".container-carrito");
const productosCarrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];

function ordenarProductosPorNombreAsc(productos) {
  return productos.slice().sort((a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    return nombreA.localeCompare(nombreB);
  });
}

const cardsAHtml = (array, container) => {
  const productosOrdenados = ordenarProductosPorNombreAsc(array);

  const cards = productosOrdenados.reduce((acc, element) => {
    const isInCarrito = productosCarrito.some((carritoElement) => carritoElement.id === element.id);
    const buttonText = isInCarrito ? "Eliminar del carrito" : "Agregar al carrito";

    return acc + `
        <div class="card" id="card-${element.id}">
            <h2>
                ${element.nombre}
            </h2>
            <figure class="container-card">
                <img src="../${element.imagen}" alt="imagen de ${element.nombre}">
            </figure>
            <h3>
                precio minorista: $${element.precioUnitario}
            </h3>
            <h3>
                precio mayorista: $${element.precioMayorista}
            </h3>
            <button class="button-card" id="button-${element.id}">
                ${buttonText}
            </button>
        </div>
    `;
  }, "");
  container.innerHTML = cards;
}

cardsAHtml(productosCarrito, containerCarrito);

containerCarrito.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("button-card")) {
        const id = e.target.id.slice(7);
        const index = productosCarrito.findIndex((element) => element.id === Number(id));

        if (index !== -1) {
            const buscarProducto = productosCarrito[index];
            productosCarrito.splice(index, 1);
            localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
            cardsAHtml(productosCarrito, containerCarrito);
            Toastify({
                text: `Se ha eliminado ${buscarProducto.nombre} del carrito`,
                className: "info",
                style: {
                    background: "linear-gradient(to right, #FF5733, #D133FF)",
                },
            }).showToast();
        }
    }
});

