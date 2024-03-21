document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const sections = document.querySelectorAll('section');

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            (rect.top >= 0 && rect.top <= window.innerHeight / 2) ||
            (rect.bottom >= 0 && rect.bottom <= window.innerHeight / 2)
        );
    }

    function toggleActive() {
        slides.forEach(slide => {
            if (isInViewport(slide)) {
                slide.classList.add('active');
                slide.classList.add('in-view');
            } else {
                slide.classList.remove('active');
                slide.classList.remove('in-view');
            }
        });

        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', toggleActive);

    const backButton = document.getElementById('back-to-top');

    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backButton.style.display = 'block';
        } else {
            backButton.style.display = 'none';
        }
    }

    window.addEventListener('scroll', toggleBackToTopButton);

    const footer = document.querySelector('.footer');

    function toggleFooter() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    }

    window.addEventListener('scroll', toggleFooter);

    const scrollButtons = document.querySelectorAll('.scroll-button');

    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    backButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
