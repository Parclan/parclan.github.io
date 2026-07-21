document.addEventListener('DOMContentLoaded', () => {
    // ── LANGUAGE SYSTEM ──
    const translations = {
        en: {
        'tech stack': 'tech stack',
        'Technologies & Tools': 'Technologies & Tools',
        'FRONTEND': 'FRONTEND',
        'BACKEND': 'BACKEND',
        'DATABASE & TOOLS': 'DATABASE & TOOLS',
        'Projects ↓': 'Projects ↓',
        '/ selected work': '/ selected work',
        'Selected Projects': 'Selected Projects',
        '/ let\'s connect': '/ let\'s connect',
        'Have a project in mind?': 'Have a project in mind?',
        'Send me an email': 'Send me an email',
        'LinkedIn': 'LinkedIn',
        'View more on GitHub': 'View more on GitHub',
        'Building products. Growing people.': 'Building products. Growing people.',
        'I\'m a Fullstack web developer with dedicated experience in frontend, working with React and Tailwind. I complement my skills with PHP, Laravel, Node.js, and Python, plus API integration. I work with databases like MySQL, MariaDB, and PostgreSQL, and I have experience in microservices development using Docker.': 'I\'m a Fullstack web developer with dedicated experience in frontend, working with React and Tailwind. I complement my skills with PHP, Laravel, Node.js, and Python, plus API integration. I work with databases like MySQL, MariaDB, and PostgreSQL, and I have experience in microservices development using Docker.',
        'I\'m always open to discussing new projects, creative ideas, or opportunities to grow together.': 'I\'m always open to discussing new projects, creative ideas, or opportunities to grow together.',
        'Bancolombia login recreated for educational purposes.': 'Bancolombia login recreated for educational purposes.',
        'User interface for a music streaming application. (For educational purposes)': 'User interface for a music streaming application. (For educational purposes)',
        },
        es: {
        'tech stack': 'stack de tecnologías',
        'Technologies & Tools': 'Tecnologías & Herramientas',
        'FRONTEND': 'FRONTEND',
        'BACKEND': 'BACKEND',
        'DATABASE & TOOLS': 'BASE DE DATOS & HERRAMIENTAS',
        'Projects ↓': 'Proyectos ↓',
        '/ selected work': '/ trabajo seleccionado',
        'Selected Projects': 'Proyectos Seleccionados',
        '/ let\'s connect': '/ conectemos',
        'Have a project in mind?': '¿Tienes un proyecto en mente?',
        'Send me an email': 'Envíame un email',
        'LinkedIn': 'LinkedIn',
        'View more on GitHub': 'Ver más en GitHub',
        'Building products. Growing people.': 'Construyendo productos. Haciendo crecer personas.',
        'I\'m a Fullstack web developer with dedicated experience in frontend, working with React and Tailwind. I complement my skills with PHP, Laravel, Node.js, and Python, plus API integration. I work with databases like MySQL, MariaDB, and PostgreSQL, and I have experience in microservices development using Docker.': 'Soy desarrollador web Fullstack con experiencia dedicada al frontend, trabajando con React y Tailwind. Complemento mis habilidades con PHP, Laravel, Node.js y Python, además de integración de APIs. Manejo bases de datos como MySQL, MariaDB y PostgreSQL, y tengo experiencia en el desarrollo de microservicios utilizando Docker.',
        'I\'m always open to discussing new projects, creative ideas, or opportunities to grow together.': 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para crecer juntos.',
        'Bancolombia login recreated for educational purposes.': 'Login bancolombia recreado para fines educativos.',
        'User interface for a music streaming application. (For educational purposes)': 'Interfaz de usuario para una aplicación de música. (Para fines educativos)',
        'Travel website featuring information on destinations and vacation packages.': 'Pagina web de viajes, con información de destinos y paquetes turísticos.',
        'Situs web GeDT': 'Pagina web de GeDT',
        }
    };

    let currentLanguage = localStorage.getItem('language') || 'en';

    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update all translated elements
        document.querySelectorAll('[data-en]').forEach(el => {
        const key = el.dataset.en;
        el.textContent = translations[lang][key] || el.dataset[lang] || el.dataset.en;
        });
    }

    // Initialize language
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    setLanguage(currentLanguage);

    // ── SCROLL BLUR EFFECT & SOCIAL ICONS VISIBILITY ──
    const socialContainer = document.querySelector('.social-icons-container');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Show/hide social icons container
        if (scrollY > 50) {
        socialContainer.classList.add('visible');
        } else {
        socialContainer.classList.remove('visible');
        }
        
        // Blur effect
        const blurAmount = Math.min(scrollY / 100, 8); // Max 8px blur
        if (socialContainer) {
        socialContainer.style.backdropFilter = `blur(${12 + blurAmount}px)`;
        socialContainer.style.webkitBackdropFilter = `blur(${12 + blurAmount}px)`;
        }
    });

    // ── SCROLL REVEAL ──
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach(el => observer.observe(el));
});