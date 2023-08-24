const productosLs = JSON.parse(localStorage.getItem("productos"))

const containerCarrito = document.querySelector(".container-carrito")

const cardsAHtml = (array,container)  => {
    const cards = array.reduce((acc, element) => {
      console.log(acc)
      return acc + `
          <div class="card" id="card-${element.id}">
            <h2>
              ${element.nombre}
            </h2>
            <figure class="container-card">
              <img src="../${element.imagen}" alt="imagen de ${element.nombre}">
            </figure>
            <h3>
              precio minorista:$${element.precioUnitario}
            </h3>
            <h3>
              precio mayorista:$${element.precioMayorista}
            </h3>
            <button class="button-card" id="button-${element.id}">
              Agregar al carrito
            </button>
  
          </div>
      `
    }, "")
    containerCarrito.innerHTML = cards;
  }
  
  
  
  cardsAHtml(productosLs,containerCarrito);