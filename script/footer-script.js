const dynamicFooter = document.getElementById('footer');

const footerContainer = document.createElement("section");
footerContainer.classList.add("footer-container");

const footerInfo = document.createElement("div");
footerInfo.classList.add("footer-info");

const lgpdLink = document.createElement("a");
lgpdLink.href = "http://www.gov.br/mds/pt-br/acesso-a-informacao/lgpd#:~:text=A%20Lei%20Geral%20de%20Prote%C3%A7%C3%A3o,da%20personalidade%20de%20cada%20indiv%C3%ADduo.";
lgpdLink.target = "_blank";
lgpdLink.alt = "Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018";
lgpdLink.rel = "noopener noreferrer";

const lgpdText = document.createElement("p");
lgpdText.innerText = "Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018"

const footerSocial = document.createElement("div");
footerSocial.classList.add("footer-social");

const footerSocialContainer = document.createElement('div');

const socialText = document.createElement("p");
socialText.innerText = "Nos siga nas redes sociais";

const socialIcons1 = document.createElement('div');
const socialIcons2 = document.createElement('div');

const socialLinks = [
    { name: 'WhatsApp', icon: 'whatsapp-logo.png', link: 'https://www.whatsapp.com/?lang=pt_BR' },
    { name: 'Twitter', icon: 'twitter-logo.png', link: 'https://twitter.com' },
    { name: 'YouTube', icon: 'youtube-logo.png', link: 'https://www.youtube.com/' },
    { name: 'Pinterest', icon: 'pinterest-logo.png', link: 'https://br.pinterest.com/' },
    { name: 'Instagram', icon: 'instagram-logo.png', link: 'https://br.pinterest.com/' },
    { name: 'Facebook', icon: 'facebook-logo.png', link: 'https://www.facebook.com/' },
];

const socialLinks1 = socialLinks.slice(0, 3);
const socialLinks2 = socialLinks.slice(3, 6);

socialLinks1.forEach((social) => {
    const socialLink1 = document.createElement('a');
    socialLink1.href = social.link;
    socialLink1.target = "_blank";

    const socialImg = document.createElement('img');
    socialImg.className = 'social';
    socialImg.src = `../assets/${social.icon}`;
    socialImg.alt = social.name;

    socialLink1.appendChild(socialImg);
    socialIcons1.appendChild(socialLink1);
});
socialLinks2.forEach((social) => {
    const socialLink2 = document.createElement('a');
    socialLink2.href = social.link;
    socialLink2.target = "_blank";

    const socialImg = document.createElement('img');
    socialImg.className = 'social';
    socialImg.src = `../assets/${social.icon}`;
    socialImg.alt = social.name;

    socialLink2.appendChild(socialImg);
    socialIcons2.appendChild(socialLink2);
});

const socialGrupIcons = document.createElement('div');
socialGrupIcons.classList.add("social-grup-icons");

const footerCopyright = document.createElement("div");

footerCopyright.classList.add("footer-copyright");
footerCopyright.setAttribute("id", "footer-copyright");

footerSocialContainer.appendChild(socialText);

footerSocial.appendChild(footerSocialContainer);

socialGrupIcons.appendChild(socialIcons1);
socialGrupIcons.appendChild(socialIcons2);
footerSocial.appendChild(socialGrupIcons);

footerInfo.appendChild(lgpdLink);
lgpdLink.appendChild(lgpdText);

footerContainer.appendChild(footerInfo);
footerContainer.appendChild(footerSocial);

const items = [
    { tipo: "&#169 2023 all right reserve" },
    { tipo: "traco" },
    { tipo: "termos", texto: "Termos" },
    { tipo: "traco" },
    { tipo: "privacidade", texto: "Privacidade" },
    { tipo: "traco" },
    { tipo: "regulamento", texto: "Regulamentos do programa" }
];

items.forEach((item) => {

    const pElement = document.createElement("p");
    pElement.classList.add("info");

    if (item.tipo === "&#169 2023 all right reserve") {

        pElement.innerHTML = "&#169 2023 all right reserve";
        footerCopyright.appendChild(pElement);

    } else if (item.tipo === "traco") {

        pElement.innerHTML = " · ";
        pElement.classList.add("hidderResponsive");
        footerCopyright.appendChild(pElement);

    } else if (item.texto) {

        const aElement = document.createElement("a");
        aElement.classList.add("info");
        aElement.href = "#";
        aElement.innerText = item.texto;

        footerCopyright.appendChild(aElement);
    }
});

dynamicFooter.appendChild(footerContainer);
dynamicFooter.appendChild(footerCopyright);