//Percorrer o elemento id file

//Quando o nosso elemento mudar, ele cria uma função, para mostrar o nome da imagemque está a ser carregada//
document.querySelector('#file').addEventListener('change', function () {
    document.querySelector('.text-1').textContent = this.files[0].name;
})
