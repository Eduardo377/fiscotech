function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        lightDarkMode.src = "../assets/dark-mode.png";
    } else {
        lightDarkMode.src = "../assets/light-mode.png";
    }
}

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkMode.matches) {
    toggleDarkMode();
}

const modeToggleBtn = document.getElementById('mode-toggle-btn');
modeToggleBtn.addEventListener('click', toggleDarkMode);