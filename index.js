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


let opcion = "";
while (opcion !== "4") {
  opcion = prompt("Que deseas hacer hoy?\n\n1 - Lista de precios minoristas\n2 - Lista de precios mayoristas\n3 - Solicitar turno de entrega y abonar\n4 - Salir");

  switch (opcion) {
    case "1":
      let precioUnitarioMinorista = 1500;
      alert(`El precio por kilo para minoristas es de $${precioUnitarioMinorista}`);
      let cantidadMinorista = parseInt(prompt("Ingrese la cantidad de productos para minoristas:"));
      let totalMinorista = cantidadMinorista * precioUnitarioMinorista;
      alert(`Total a abonar para ${cantidadMinorista} productos para minoristas: $${totalMinorista}`);
      break;
    case "2":
      let precioUnitarioMayorista = 12000;
      alert(`El precio por 10kg para mayoristas es de $${precioUnitarioMayorista}`);
      let cantidadMayorista = parseInt(prompt("Ingrese la cantidad de productos para mayoristas:"));
      let totalMayorista = cantidadMayorista * precioUnitarioMayorista;
      alert(`Total a abonar para ${cantidadMayorista} productos para mayoristas: $${totalMayorista}`);
      break;
    case "3":
      let tipoCliente = prompt("¿Va a comprar como mayorista o minorista? (M/Mayorista o N/Minorista)").toUpperCase();
      let cantidad;
      let precio;
      if (tipoCliente === "M" || tipoCliente === "MAYORISTA") {
        cantidad = parseInt(prompt("Ingrese la cantidad de productos para mayoristas:"));
        precio = 12000;
      } else if (tipoCliente === "N" || tipoCliente === "MINORISTA") {
        cantidad = parseInt(prompt("Ingrese la cantidad de productos para minoristas:"));
        precio = 1500;
      } else {
        alert("Opción inválida. No se pudo determinar el tipo de cliente.");
        break;
      }
      let total = cantidad * precio;
      let fecha = prompt("Ingrese la fecha de entrega(en formato dd/mm/aaaa):");
      let formaCobro = prompt("Ingrese la forma de cobro (Efectivo o Transferencia):");
      alert(`Tipo de cliente: ${tipoCliente}\nCantidad de productos: ${cantidad}\nTotal a abonar: $${total}\nFecha de entrega: ${fecha}\nForma de cobro: ${formaCobro}`);
      break;
    case "4":
      alert("Gracias por comprar en EcoAlimentos");
      break;
    default:
      alert("Opción inválida");
      break;
  }
}





