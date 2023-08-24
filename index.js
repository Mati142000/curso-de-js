
const productos = [
  {
    nombre: "Mix de Frutos Secos",
    imagen:"multimedia/imagenes/mix-frutos-secos.jpg",
    id:1,
    precioUnitario: 1500,
    precioMayorista: 12000,
  },
  {
    nombre: "Granola",
    imagen:"multimedia/imagenes/granola.jpg",
    id:2,
    precioUnitario: 1300,
    precioMayorista: 10000,
  },
  {
    nombre: "Barras Nutritivas",
    imagen:"multimedia/imagenes/barritas-energeticas.jpg",
    id:3,
    precioUnitario: 400,
    precioMayorista: 3000,
  },
  {
    nombre: "Mix Semillas",
    imagen:"multimedia/imagenes/mix-semillas.jpg",
    id:4,
    precioUnitario: 1000,
    precioMayorista: 8000,
  },
  {
    nombre: "Aceitunas",
    imagen:"multimedia/imagenes/aceitunas.jpg",
    id:5,
    precioUnitario: 800,
    precioMayorista: 6000,
  },
];




const containerCards = document.querySelector(".container-cards")

console.log( containerCards)

const cardsAHtml = array  => {
  const cards = array.reduce((acc, element) => {
    console.log(acc)
    return acc + `
        <div class="card" id="card-${element.id}">
          <h2>
            ${element.nombre}
          </h2>
          <figure class="container-card">
            <img src="${element.imagen}" alt="imagen de ${element.nombre}">
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
  containerCards.innerHTML = cards
}



cardsAHtml(productos);

const AllCards = document.querySelectorAll(".button-card")


let productosCarrito = []


const eventocards = (nodos, array) =>{

    for (let i = 0 ; i < nodos.length ; i++ ){

        nodos[i].onclick = (e) =>{

          const id = e.currentTarget.id.slice(7)
          const buscarProducto = array.find(element => element.id === Number(id))
          productosCarrito.push(buscarProducto)
          localStorage.setItem("productos",JSON.stringify(productosCarrito))
          Toastify({
            text: `se ha añadido a ${buscarProducto.nombre} al carrito`,
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
          

        }

    }

}

eventocards(AllCards,productos)

 




