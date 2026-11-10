// MENÚ HAMBURGUESA
const menuBoton = document.getElementById("menuBoton");
const navegacion = document.getElementById("navegacion");

menuBoton.addEventListener("click", () => {
    navegacion.classList.toggle("activo");

    const abierto = navegacion.classList.contains("activo");
    menuBoton.setAttribute("aria-expanded", abierto);
});

// CARRITO
let cantidadCarrito = 0;

const botonesAgregar = document.querySelectorAll(".agregar");
const contador = document.getElementById("contador");

botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {
        cantidadCarrito++;
        contador.textContent = cantidadCarrito;

        const producto = boton.dataset.producto;
        alert(producto + " se agregó al carrito 💗");
    });
});

// NEWSLETTER
const formulario = document.getElementById("formNewsletter");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    alert("¡Gracias por suscribirte a BRILLA! 💗");
    formulario.reset();
});

// VOLVER ARRIBA
const volverArriba = document.getElementById("volverArriba");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        volverArriba.classList.add("mostrar");
    } else {
        volverArriba.classList.remove("mostrar");
    }
});

volverArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});