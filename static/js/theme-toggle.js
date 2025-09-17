document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecciona todos los elementos necesarios.
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    
    // Selecciona los elementos principales que cambian de color
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const footer = document.querySelector('.footer');
    const cards = document.querySelectorAll('.card');

    // 2. Define una función para aplicar o quitar el tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            header.classList.add('dark-mode');
            main.classList.add('dark-mode');
            footer.classList.add('dark-mode');
            cards.forEach(card => card.classList.add('dark-mode')); // Aplica a cada tarjeta
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            body.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            main.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');
            cards.forEach(card => card.classList.remove('dark-mode'));
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }
    };

    // 3. Obtén el tema inicial y aplícalo
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(currentTheme);

    // 4. Agrega el evento de clic al botón
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
});