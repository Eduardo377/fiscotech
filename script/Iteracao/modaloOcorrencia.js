// -----------------------------------------DEFINIR A MODAL PARA ELIMINAR DENÚNCIAS--------------------------------------------------------------

const modal_eliminar = document.querySelector(".modal-container-eliminar")

function openModal() {
   modal_eliminar.classList.add("active")
}

function closeModalEliminar() {
  modal_eliminar.classList.remove('active')
}

// -----------------------------------------DEFINIR A MODAL PARA VISUALIZAR INFORMAÇÕES--------------------------------------------------------------

const modal_visualizar = document.querySelector(".modal-container-visualizar")

function openModaVisualizar() {
  modal_visualizar.classList.add("active-visualizar")
}

function closeModalVisualizar() {
  modal_visualizar.classList.remove("active-visualizar")
}