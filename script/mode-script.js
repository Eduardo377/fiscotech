function setTheme(theme) {
    const body = document.body;
    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(theme);
}

function toggleDarkMode() {
    const checkbox = document.getElementById("checkbox-mode-toggle-btn");
    if (checkbox.checked) {
        setTheme('dark-mode');
    } else {
        setTheme('light-mode');
    }
}

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkMode.matches) {
    setTheme('dark-mode');
} else {
    setTheme('light-mode');
}

const modeToggleBtn = document.getElementById('checkbox-mode-toggle-btn');
modeToggleBtn.addEventListener('change', toggleDarkMode);