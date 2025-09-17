document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecciona todos los elementos necesarios.
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    
    // Selecciona los elementos principales que cambian de color (CORREGIDO)
    const header = document.querySelector('.header-foursweets');
    const main = document.querySelector('.main');
    const footer = document.querySelector('.footer');
    const cards = document.querySelectorAll('.card');

    // 2. Define una función para aplicar o quitar el tema
    const applyTheme = (theme) => {
        const isDarkMode = theme === 'dark';
        
        // Aplica o quita la clase 'dark-mode' a todos los elementos relevantes
        body.classList.toggle('dark-mode', isDarkMode);
        
        // Verifica si los elementos existen antes de aplicar la clase
        if (header) {
            header.classList.toggle('dark-mode', isDarkMode);
        }
        if (main) {
            main.classList.toggle('dark-mode', isDarkMode);
        }
        if (footer) {
            footer.classList.toggle('dark-mode', isDarkMode);
        }
        
        // Itera sobre las tarjetas para aplicar el estilo
        cards.forEach(card => card.classList.toggle('dark-mode', isDarkMode));
        
        // Cambia los íconos del botón
        moonIcon.classList.toggle('hidden', isDarkMode);
        sunIcon.classList.toggle('hidden', !isDarkMode);
    };

    // 3. Obtén el tema inicial y aplícalo
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(currentTheme);

    // 4. Agrega el evento de clic al botón
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
});