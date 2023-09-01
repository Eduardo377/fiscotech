const header = document.querySelector(".header");

const headerContainer = document.createElement("section");
headerContainer.classList.add("header-container");

const logoLink = document.createElement('a');
logoLink.href = "../index.html";
logoLink.rel = "noopener noreferrer";
logoLink.classList.add("logo");
logoLink.alt = "link pra home";

const logoImg = document.createElement("img");
logoImg.src = "../assets/logo.png";
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

const idiomaLink = document.createElement("a");
idiomaLink.href = "#";

const idiomaButton = document.createElement("button");
idiomaButton.innerText = "Idioma";
idiomaButton.classList.add("idiomas");

const arrowImg = document.createElement("img");
arrowImg.src = "../assets/arrow-botton.png";
arrowImg.alt = "seta pra abrir idiomas";
arrowImg.classList.add("arrow");

menuLink.appendChild(menuImg);

loginLink.appendChild(avatarImg);

spanMenu.appendChild(loginLink);
spanMenu.appendChild(menuLink);

idiomaButton.appendChild(arrowImg);
idiomaLink.appendChild(idiomaButton);

divUtilitarios.appendChild(idiomaLink);
divUtilitarios.appendChild(checkboxConteiner);

navMenu.appendChild(divUtilitarios);
navMenu.appendChild(spanMenu);

titleH1.appendChild(strongTitle);
titleLink.appendChild(titleH1);

logoLink.appendChild(logoImg);

headerContainer.appendChild(logoLink);
headerContainer.appendChild(titleLink);
headerContainer.appendChild(navMenu);

header.appendChild(headerContainer);