document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const contato = document.getElementById('contato'); // Corrigido para 'contato'

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

        // Adicionado para a seção de contato
        if (isInViewport(contato)) {
            contato.classList.add('active');
        } else {
            contato.classList.remove('active');
        }
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
            // Quando chegar ao final da página, garantir que a seção de contatos esteja visível
            contato.classList.add('in-view');
        } else {
            footer.style.display = 'none';
        }
    }

    window.addEventListener('scroll', toggleFooter);

    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Adicionando evento de clique para o botão "Voltar ao Topo"
    backButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});