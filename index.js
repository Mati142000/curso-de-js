let edadUsuario = prompt("bienvenido a EcoAlimentos,cual es tu edad?")
let edadparseada = parseInt(edadUsuario)


if(edadparseada >= 18){
    alert("Sos mayor, podes comprar en nuestra pagina")
}else {
    alert("sos menor,no puedes realizar compras en nuestra pagina")
}

function saludar(usuario){
        alert("bienvenido de nuevo, " + usuario);
}

let usuario = prompt("ingrese su alias");

saludar(usuario);

const productos = [
  {
    nombre: "Mix de Frutos Secos",
    precioUnitario: 1500,
    precioMayorista: 12000,
  },
  {
    nombre: "Granola",
    precioUnitario: 1300,
    precioMayorista: 10000,
  },
  {
    nombre: "Barras Nutritivas",
    precioUnitario: 400,
    precioMayorista: 3000,
  },
  {
    nombre: "Mix Semillas",
    precioUnitario: 1000,
    precioMayorista: 8000,
  },
  {
    nombre: "Aceitunas",
    precioUnitario: 800,
    precioMayorista: 6000,
  },
];

const ecoAlimentos = {
  saludar(usuario) {
    alert("Bienvenido de nuevo, " + usuario);
  },

  mostrarPreciosMinoristas() {
    let mensaje = "Lista de precios minoristas:\n";
    for (const producto of productos) {
      mensaje += `${producto.nombre}: $${producto.precioUnitario} por unidad\n`;
    }
    alert(mensaje);
  },

  mostrarPreciosMayoristas() {
    let mensaje = "Lista de precios mayoristas:\n";
    for (const producto of productos) {
      mensaje += `${producto.nombre}: $${producto.precioMayorista} por 10 unidades\n`;
    }
    alert(mensaje);
  },

  solicitarTurnoYAbonar() {
    let carrito = {};
    let total = 0;

    let tipoCliente = prompt("¿Va a comprar como mayorista o minorista? (M/Mayorista o N/Minorista)").toUpperCase();
    
    if (tipoCliente === "M" || tipoCliente === "MAYORISTA") {
      let mensajeAlimentos = "Escribe el número del alimento que deseas comprar (0 para finalizar):\n";
      for (let i = 0; i < productos.length; i++) {
        mensajeAlimentos += `${i + 1}: ${productos[i].nombre}\n`;
      }
      
      while (true) {
        let alimentoElegido = parseInt(prompt(mensajeAlimentos));
        
        if (alimentoElegido === 0) {
          break;
        }

        let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
        let producto = productos[alimentoElegido - 1];

        if (producto) {
          carrito[producto.nombre] = cantidad;
          total += producto.precioMayorista * cantidad;
        } else {
          alert("Opción inválida");
        }
      }
    } else if (tipoCliente === "N" || tipoCliente === "MINORISTA") {
      let mensajeAlimentos = "Escribe el número del alimento que deseas comprar (0 para finalizar):\n";
      for (let i = 0; i < productos.length; i++) {
        mensajeAlimentos += `${i + 1}: ${productos[i].nombre}\n`;
      }
      
      while (true) {
        let alimentoElegido = parseInt(prompt(mensajeAlimentos));

        if (alimentoElegido === 0) {
          break;
        }

        let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
        let producto = productos[alimentoElegido - 1];

        if (producto) {
          carrito[producto.nombre] = cantidad;
          total += producto.precioUnitario * cantidad;
        } else {
          alert("Opción inválida");
        }
      }
    } else {
      alert("Opción inválida. No se pudo determinar el tipo de cliente.");
      return;
    }

    let factura = "Factura:\n";
    for (const nombreProducto in carrito) {
      factura += `${nombreProducto}: ${carrito[nombreProducto]} unidades - $${productos.find(p => p.nombre === nombreProducto).precioUnitario * carrito[nombreProducto]}\n`;
    }
    factura += `Total: $${total}`;

    alert(factura);

    let formaCobro = prompt("Ingrese la forma de cobro (Efectivo o Transferencia):");
    alert(`Forma de cobro: ${formaCobro}`);

    let fecha = prompt("Ingrese la fecha de entrega (dd/mm/aaaa):");
    let turno = prompt("Ingrese el turno de entrega (Mañana o Tarde):");
    alert(`Fecha de entrega: ${fecha}\nTurno: ${turno}`);
  },
};

let opcion = "";
while (opcion !== "4") {
  opcion = prompt(
    "¿Qué deseas hacer hoy?\n\n1 - Lista de precios minoristas\n2 - Lista de precios mayoristas\n3 - Solicitar turno de entrega y abonar\n4 - Salir"
  );

  switch (opcion) {
    case "1":
      ecoAlimentos.mostrarPreciosMinoristas();
      break;
    case "2":
      ecoAlimentos.mostrarPreciosMayoristas();
      break;
    case "3":
      ecoAlimentos.solicitarTurnoYAbonar();
      break;
    case "4":
      alert("Gracias por comprar en EcoAlimentos");
      break;
    default:
      alert("Opción inválida");
      break;
  }
}














