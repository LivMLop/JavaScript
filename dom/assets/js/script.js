function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(modeClass);
    h1.classList.toggle(modeClass);
    body.classList.toggle(modeClass);
    footer.classList.toggle(modeClass);
}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (body.classList.contains(modeClass)) {
        button.innerHtml = lightMode;
        h1.innerHtml = darkMode + ' ON';
        return;
    }
    
    button.innerHtml = darkMode;
    h1.innerHtml = lightMode;
}

const modeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);