// Mensaje de bienvenida
alert("Bienvenida a mi app de maquillaje 💄");

// Scroll suave (opcional)
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});
