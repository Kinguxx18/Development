const modal = document.getElementById("modal");
const form = document.getElementById("contactForm");

const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");


// Abrir modal
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});


// Cerrar modal con botón X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


// Cerrar al hacer click fuera
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


// Submit del formulario
form.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Información enviada correctamente ✅");

    form.reset();

    modal.style.display = "none";
});