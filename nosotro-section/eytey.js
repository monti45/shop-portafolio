
    let indice = 0;

    function actualizarCarrusel() {
      document.getElementById("imagenProducto").src = productos[indice].imagen;
      document.getElementById("tituloProducto").textContent = productos[indice].nombre;
    }

    function moverIzquierda() {
      indice = (indice - 1 + productos.length) % productos.length;
      actualizarCarrusel();
    }

    function moverDerecha() {
      indice = (indice + 1) % productos.length;
      actualizarCarrusel();
    }

    actualizarCarrusel();