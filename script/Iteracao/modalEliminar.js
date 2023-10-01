const modal_eliminar = document.querySelector(".modal-container-eliminar")

function openModal() {
   modal_eliminar.classList.add("active")
}

function closeModalEliminar() {
  modal_eliminar.classList.remove('active')
}