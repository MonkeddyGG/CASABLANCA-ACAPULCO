document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Toggle menú móvil
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Cambiar icono de hamburguesa a cruz
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            header.classList.add('scrolled'); // Asegurar fondo blanco si se abre arriba
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            if (window.scrollY <= 50) {
                header.classList.remove('scrolled');
            }
        }
    });

    // Cerrar menú móvil al hacer clic en un enlace
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Prevenir envío de formulario por defecto para demostración
    const formCotizacion = document.getElementById('form-cotizacion');
    if (formCotizacion) {
        formCotizacion.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu interés! Un especialista en bodas de Casablanca Acapulco se pondrá en contacto contigo pronto.');
            formCotizacion.reset();
        });
    }
});