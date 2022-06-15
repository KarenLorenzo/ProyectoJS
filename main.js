let total = 0;
let precio = 0;
let otroProducto = false;

function agregarAlCarrito() {

    do{
        let producto = prompt("¿Queres comprar top paulina blanco, top corazon negro, vestido kyle, vestido lisboa rojo?");
        let cantidad = parseInt(prompt("¿Cuantos queres comprar?", 0));
    
        switch (producto){
        case "top paulina blanco":
                 precio = 1600;
                 break;
      case "top corazon negro":
                precio = 1200;
                break;
             

        case "vestido kyle":
                 precio = 3200;
                 break;
       case "vestido lisboa rojo":
                precio = 2100;
               break;
       default:
           alert("Algunos de los datos ingresados no son correctos");
           precio = 0;
           cantidad = 0;
    } 

    total = total + precio * cantidad;
    otroProducto = confirm("¿Queres agregar otro producto?")
    
    } while (otroProducto);
     console.log(total);
  }

  function aplicarDescuento (total) {
    if (total >= 5000) {
        total = total * 0.90;
    }

    return total
}

  function calcularEnvio (total){
      let confirmacion = confirm("¿Queres envio a domicilio?");
      
      if (confirmacion && total >= 2000){
          alert("Tenes envio gratis. El total de tu compra es $" + total);
     } else if (confirmacion && total < 2000 && total != 0) {
         total = total + 700;
         alert("El envio cuesta $700. El total de tu compra es $" + total);
    }  else {
        alert ("El total de tu compra es $" + total);
    } 
     
    return total;
}
    

agregarAlCarrito();
calcularEnvio(aplicarDescuento(total));
