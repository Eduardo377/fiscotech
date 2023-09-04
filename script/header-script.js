const header = document.querySelector(".header");

const headerContainer = document.createElement("section");
headerContainer.classList.add("header-container");

const logoLink = document.createElement('a');
logoLink.href = "../index.html";
logoLink.rel = "noopener noreferrer";
logoLink.classList.add("logo");
logoLink.alt = "link pra home";

const logoImg = document.createElement("img");
logoImg.src = "../assets/logo.svg";
logoImg.alt = "Logo do site";
logoImg.classList.add("logo");

const titleLink = document.createElement("a");
titleLink.href = "../index.html";
titleLink.rel = "noopener noreferrer";
titleLink.alt = "Titulo do site";

const titleH1 = document.createElement("h1");
const strongTitle = document.createElement("strong");
strongTitle.textContent = "FISCO TECH";

const navMenu = document.createElement("nav");
navMenu.classList.add("nav-menu");
const spanMenu = document.createElement("span");
spanMenu.classList.add("span-menu");

const checkboxConteiner = document.createElement("div");
checkboxConteiner.classList.add("checkbox-conteiner");

checkboxConteiner.innerHTML = `
    <p>Tema</p>
    <input type="checkbox" class="menu checkbox" id="checkbox-mode-toggle-btn">
    <label class="label" for="checkbox-mode-toggle-btn">
    <img class="moon" src="../assets/dark-mode.png" />
    <img class="sun" src="../assets/light-mode.png" />
    <div class="ball"></div>
    </label>
    `;

const divUtilitarios = document.createElement("div");
divUtilitarios.classList.add("div-utility");

const loginLink = document.createElement("a");
loginLink.href = "../pages/login.html";
loginLink.alt = "Link de login";

const avatarImg = document.createElement("img");
avatarImg.classList.add("menu");
avatarImg.src = "../assets/avatar.png";
avatarImg.alt = "avatar";

const menuLink = document.createElement("a");
menuLink.href = "#";
menuLink.alt = "Links uteis";

const menuImg = document.createElement("img");
menuImg.classList.add("menu");
menuImg.src = "../assets/menu.png";
menuImg.alt = "menu";

// const idiomaLink = document.createElement("a");
// idiomaLink.href = "#";

const idiomaButton = document.createElement("button");
idiomaButton.innerText = "Idioma";
idiomaButton.classList.add("idiomas");

const arrowImg = document.createElement("img");
arrowImg.src = "../assets/arrow-botton.png";
arrowImg.alt = "seta pra abrir idiomas";
arrowImg.classList.add("arrow");
arrowImg.setAttribute("id", "arrow");

const modalIdiomas = document.createElement("div");
modalIdiomas.classList.add("hidden");
modalIdiomas.classList.add("modal-idiomas");
modalIdiomas.setAttribute("id", "idiomas");

const modalIdiomasContent = document.createElement("div");
modalIdiomasContent.classList.add("modal-idiomas-content");

const h2Selected = document.createElement("h2");
h2Selected.innerText = "Selecione um idioma:";

const ulListIdiomas = document.createElement("ul");

const linguas = [
    { name: 'Português' },
    { name: 'Inglês' },
    { name: 'Espanhol' },
    { name: 'Francês' },
    { name: 'Alemão' },
    { name: 'Italiano' },
    { name: 'Holandês' },
    { name: 'Sueco' },
    { name: 'Norueguês' },
    { name: 'Dinamarquês' },
    { name: 'Finlandês' },
    { name: 'Russo' },
    { name: 'Chinês' },
    { name: 'Japonês' },
    { name: 'Coreano' },
    { name: 'Árabe' },
    { name: 'Turco' },
    { name: 'Grego' },
    { name: 'Hindi' },
    { name: 'Bengali' },
    { name: 'Tailandês' },
    { name: 'Hebraico' },
    { name: 'Polonês' },
    { name: 'Checo' },
    { name: 'Húngaro' },
    { name: 'Romeno' },
    { name: 'Búlgaro' },
    { name: 'Ucraniano' },
    { name: 'Croata' },
    { name: 'Sérvio' },
    { name: 'Esloveno' },
    { name: 'Lituano' },
    { name: 'Letão' },
    { name: 'Estoniano' },
    { name: 'Vietnamita' },
    { name: 'Malaio' },
    { name: 'Indonésio' },
    { name: 'Tagalog' },
    { name: 'Swahili' },
    { name: 'Árabe' },
    { name: 'Turco' },
    { name: 'Hebraico' },
    { name: 'Polonês' },
    { name: 'Checo' },
    { name: 'Húngaro' },
    { name: 'Romeno' },
    { name: 'Búlgaro' },
    { name: 'Ucraniano' },
    { name: 'Croata' },
    { name: 'Sérvio' },
    { name: 'Esloveno' },
    { name: 'Lituano' },
    { name: 'Letão' },
    { name: 'Estoniano' },
    { name: 'Vietnamita' },
    { name: 'Malaio' },
    { name: 'Indonésio' },
    { name: 'Tagalog' },
    { name: 'Swahili' },
];


linguas.forEach((idioma) => {
    const linkLingua = document.createElement('a');
    linkLingua.innerText = idioma.name;
    linkLingua.href = "#";

    const liListIdioma = document.createElement("li");
    liListIdioma.appendChild(linkLingua);
    ulListIdiomas.appendChild(liListIdioma);
});

const closeModalIdioma = document.createElement("button");
closeModalIdioma.classList.add("closeModalIdiomas");
closeModalIdioma.setAttribute("id", "close");
closeModalIdioma.innerHTML = "X";

arrowImg.addEventListener("click", () => {
    modalIdiomas.classList.remove("hidden");
    console.log(arrowImg);
});

function closeModal() {
    modalIdiomas.classList.add("hidden");
    console.log(arrowImg);
}

closeModalIdioma.addEventListener("click", () => {
    closeModal();
});


window.addEventListener("click", (event) => {
    if (event.target === modalIdiomas) {
        closeModal();
    }
});

menuLink.appendChild(menuImg);

loginLink.appendChild(avatarImg);

spanMenu.appendChild(loginLink);
spanMenu.appendChild(menuLink);


h2Selected.appendChild(ulListIdiomas);
modalIdiomasContent.appendChild(h2Selected);
modalIdiomasContent.appendChild(closeModalIdioma);
modalIdiomas.appendChild(modalIdiomasContent);


idiomaButton.appendChild(arrowImg);
// idiomaLink.appendChild(idiomaButton);

divUtilitarios.appendChild(idiomaButton);
divUtilitarios.appendChild(checkboxConteiner);

navMenu.appendChild(divUtilitarios);
navMenu.appendChild(spanMenu);

navMenu.appendChild(modalIdiomas);

titleH1.appendChild(strongTitle);
titleLink.appendChild(titleH1);

logoLink.appendChild(logoImg);

headerContainer.appendChild(logoLink);
headerContainer.appendChild(titleLink);
headerContainer.appendChild(navMenu);

header.appendChild(headerContainer);

// arrowImg.addEventListener("click", () => {
//     arrowImg.innerHTML =
//         `
// <div></div>
// <div class=" modal-idiomas" id="idiomas">
// <div></div> class="modal-idiomas-content">
// <h2>
//     "Selecione um idioma:"
//     <ul>
//         <li>
//             <a href="#" target="_blank">Português</a>
//         </li>
//         <li>
//             <a href="#" target="_blank">Inglês</a>
//         </li>
//         <li>
//             <a href="#" target="_blank">Espanhol</a>
//         </li>
//     </ul>
// </h2>
// <button class="closeModalIdiomas" id="close"></button>
// </div>
// </div>
// `
//     console.log(arrowImg);
// });