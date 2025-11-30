document.addEventListener("DOMContentLoaded", () => {
    // стрілка скролу
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    // карусель
    const carouselItems = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');

    if (carouselItems.length > 0 && dots.length > 0) {
        let currentIndex = 0;

        const leftBtn = document.querySelector('.carousel-arrow.left');
        const rightBtn = document.querySelector('.carousel-arrow.right');

        const updateCarousel = (newIndex) => {
            carouselItems[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');

            currentIndex = newIndex;

            carouselItems[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        };

        leftBtn?.addEventListener('click', () =>
            updateCarousel((currentIndex - 1 + carouselItems.length) % carouselItems.length)
        );

        rightBtn?.addEventListener('click', () =>
            updateCarousel((currentIndex + 1) % carouselItems.length)
        );
    }

    // modal window
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    if (openModalBtn && modal && closeModalBtn) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
        });

        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    const form = document.getElementById('consultForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = form.name.value;
            const email = form.email.value;
            alert(`Дякуємо, ${name}!\nМи зв'яжемося з вами на ${email}.`);
            modal.style.display = 'none';
            form.reset();
        });
    }

    //Повідослення на формі контактів
    const businessForm = document.getElementById('businessForm');

    if (businessForm) {
        businessForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const data = {
                firstName: businessForm.firstName.value,
                lastName: businessForm.lastName.value,
                email: businessForm.email.value,
                position: businessForm.position.value,
                company: businessForm.company.value,
                industry: businessForm.industry.value,
                employees: businessForm.employees.value,
                priority: businessForm.priority.value,
                problem: businessForm.problem.value,
                newsletter: businessForm.newsletter.checked ? "Так" : "Ні",
            };

            alert(
                `Дякуємо, ${data.firstName}!\n\n` +
                `Ми отримали вашу заявку.`
            );
            businessForm.reset();
        });
    }

});