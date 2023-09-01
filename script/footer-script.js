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

const footerSocialConteiner = document.createElement('div');

const socialText = document.createElement("p");
socialText.innerText = "Nos siga nas redes sociais";

const socialIcons = document.createElement('div');


const socialLinks = [
    { name: 'WhatsApp', icon: 'whatsapp-logo.png', link: 'https://www.whatsapp.com/?lang=pt_BR' },
    { name: 'Twitter', icon: 'twitter-logo.png', link: 'https://twitter.com' },
    { name: 'YouTube', icon: 'youtube-logo.png', link: 'https://www.youtube.com/' },
    { name: 'Pinterest', icon: 'pinterest-logo.png', link: 'https://br.pinterest.com/' },
    { name: 'Instagram', icon: 'instagram-logo.png', link: 'https://br.pinterest.com/' },
    { name: 'Facebook', icon: 'facebook-logo.png', link: 'https://www.facebook.com/' },
];

socialLinks.forEach((social) => {
    const socialLink = document.createElement('a');
    socialLink.href = social.link;
    socialLink.target = "_blank";

    const socialImg = document.createElement('img');
    socialImg.className = 'social';
    socialImg.src = `../assets/${social.icon}`;
    socialImg.alt = social.name;

    socialLink.appendChild(socialImg);
    socialIcons.appendChild(socialLink);
});

footerSocialConteiner.appendChild(socialText);

footerSocial.appendChild(footerSocialConteiner);

footerSocial.appendChild(socialIcons);
footerInfo.appendChild(lgpdLink);
lgpdLink.appendChild(lgpdText);

footerContainer.appendChild(footerInfo);
footerContainer.appendChild(footerSocial);

dynamicFooter.appendChild(footerContainer);

const footerCopyright = document.createElement("div");
footerCopyright.classList.add("footer-copyright");
footerCopyright.setAttribute("id", "footer-copyright");
footerCopyright.innerHTML = "&#169 2023 all right reserve";
dynamicFooter.appendChild(footerCopyright);