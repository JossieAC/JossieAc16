/* MENÚ MÓVIL */
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}
/* CERRAR MENÚ AL SELECCIONAR */
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".menu").classList.remove("active");
    });
});
/* ANIMACIÓN DEL BANNER SLIDER */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide-item");
function mostrarSiguienteSlide() {
    slides[currentSlide].classList.remove("active-slide");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active-slide");
}
setInterval(mostrarSiguienteSlide, 3500);
/* ANIMACIONES AL HACER SCROLL */
const elementos = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        entradas => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("active");
                    observer.unobserve(entrada.target);
                }
            });
        },
        { threshold: 0.15 }
    );
    elementos.forEach(elemento => observer.observe(elemento));
} else {
    elementos.forEach(elemento => elemento.classList.add("active"));
}
/* INFORMACIÓN DE PROYECTOS */
const proyectos = [
    {
        titulo: "Diseño de interfaces",
        categoria: "UX / UI",
        descripcion: "Diseño de interfaz de usuario para aplicación móvil interactiva."
    },
    {
        titulo: "Identidad y Accesibilidad",
        categoria: "BRANDING / WEB",
        descripcion: "Página web de producto pensada para personas con dificultad visual y daltonismo."
    },
    {
        titulo: "E-commerce interactivo",
        categoria: "DISEÑO WEB",
        descripcion: "Plataforma web para tienda de ropa con diseño moderno y catálogo visual."
    },
    {
        titulo: "Catálogo E-commerce",
        categoria: "UX / UI",
        descripcion: "Diseño adaptable de tienda en línea enfocada en la navegación accesible."
    }
];
function mostrarProyecto(numero) {
    const proyecto = proyectos[numero];
    if (!proyecto) return;
    alert(
        proyecto.categoria +
        "\n\n" +
        proyecto.titulo +
        "\n\n" +
        proyecto.descripcion
    );
}
/* FORMULARIO DE CONTACTO */
function enviarFormulario(event) {
    event.preventDefault();
    const formulario = event.target;
    const datos = new FormData(formulario);
    const nombre = datos.get("nombre").trim();
    const correo = datos.get("correo").trim();
    const mensaje = datos.get("mensaje").trim();
    const asunto = encodeURIComponent("Contacto desde el portafolio de " + nombre);
    const cuerpo = encodeURIComponent(
        "Nombre: " + nombre +
        "\nCorreo: " + correo +
        "\n\nMensaje:\n" + mensaje
    );
    window.location.href =
        "mailto:jossie202077@gmail.com?subject=" +
        asunto +
        "&body=" +
        cuerpo;
}