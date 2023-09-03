function setTheme(theme) {
    const body = document.body;
    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(theme);
}


function toggleDarkMode() {
    const checkbox = document.getElementById("checkbox-mode-toggle-btn");
    if (checkbox.checked) {
        setTheme('dark-mode');
        const moonIcons = document.getElementsByClassName('moon');
        for (const moonIcon of moonIcons) {
            moonIcon.classList.remove('hidden');
        }
        const sunIcons = document.getElementsByClassName('sun');
        for (const sunIcon of sunIcons) {
            sunIcon.classList.add('hidden');
        }
    } else {
        setTheme('light-mode');
        const sunIcons = document.getElementsByClassName('sun');
        for (const sunIcon of sunIcons) {
            sunIcon.classList.remove('hidden');
        }
        const moonIcons = document.getElementsByClassName('moon');
        for (const moonIcon of moonIcons) {
            moonIcon.classList.add('hidden');
        }
    }
}

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');


if (prefersDarkMode.matches) {
    setTheme('dark-mode');
} else {
    setTheme('light-mode');
}

if (prefersDarkMode.matches) {
    const sunIcons = document.getElementsByClassName('sun');
    for (const sunIcon of sunIcons) {
        sunIcon.classList.add('hidden');
    }
}

const modeToggleBtn = document.getElementById('checkbox-mode-toggle-btn');
modeToggleBtn.addEventListener('change', toggleDarkMode);