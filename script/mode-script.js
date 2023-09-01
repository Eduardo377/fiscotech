function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        inputLightDarkMode.href = sunIcon;
    } else {
        inputLightDarkMode.src = moonIcon;
    }
}

// const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

// if (prefersDarkMode.matches) {
//     toggleDarkMode();
// }

const modeToggleBtn = document.getElementById('checkbox-mode-toggle-btn');
modeToggleBtn.addEventListener('click', toggleDarkMode);