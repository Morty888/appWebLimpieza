document.addEventListener("DOMContentLoaded", function () {
    // Calendario (solo si existe el input)
    const bookingInput = document.getElementById("bookingDate");
    if (bookingInput) {
        flatpickr(bookingInput, {
            minDate: "today",
            dateFormat: "d/m/Y",
            locale: "es",
            disable: [date => date.getDay() === 0] // Domingos
        });
    }

    // Envío del formulario (solo si existe el form)
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const serviceType = document.getElementById('serviceType').value;
            const bookingDate = document.getElementById('bookingDate').value;
            const duration = document.getElementById('duration').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const notes = document.getElementById('notes').value;

            console.log('Form submitted:', {
                serviceType,
                bookingDate,
                duration,
                name,
                email,
                phone,
                notes
            });

            const successModal = document.getElementById('successModal');
            if (successModal) {
                successModal.classList.remove('hidden');
            }

            this.reset();
        });
    }

    // Cerrar modal (solo si existe)
    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            const modal = document.getElementById('successModal');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    }

    // Scroll suave para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Menú hamburguesa (solo si existen los elementos)
   
    const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

if (menuToggle && mobileMenu && closeMenu && menuOverlay) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    menuOverlay.classList.remove('hidden');
    document.body.classList.add('menu-open');
  });

  function cerrarMenu() {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    menuOverlay.classList.add('hidden');
    document.body.classList.remove('menu-open');
  }

  closeMenu.addEventListener('click', cerrarMenu);
  menuOverlay.addEventListener('click', cerrarMenu);

  // Cerrar al pulsar un enlace del menú
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', cerrarMenu);
  });
}

    
    
});
