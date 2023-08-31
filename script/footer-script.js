const footer = document.querySelector("footer");

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

const footerSocialConteiner = document.createElement("div");

const socialText = document.createElement("p");
socialText.innerText = "Nos siga nas redes sociais";

footerSocialConteiner.appendChild(socialText);

footerSocial.appendChild(footerSocialConteiner);

footerContainer.appendChild(footerSocial);

lgpdLink.appendChild(lgpdText);
footerInfo.appendChild(lgpdLink);
footerContainer.appendChild(footerInfo);
footer.appendChild(footerContainer)