// Referências do Modal 1 (Sinopse)
const modalSinopse = document.getElementById("modal-sinopse");
const btnSinopse = document.getElementById("btn-sinopse");
const closeSinopse = document.getElementById("close-sinopse");

// Referências do Modal 2 (Diretor)
const modalDiretor = document.getElementById("modal-diretor");
const btnDiretor = document.getElementById("btn-diretor");
const closeDiretor = document.getElementById("close-diretor");

// Abrir Modais
btnSinopse.onclick = function() {
    modalSinopse.style.display = "block";
}

btnDiretor.onclick = function() {
    modalDiretor.style.display = "block";
}

// Fechar nos botões (X)
closeSinopse.onclick = function() {
    modalSinopse.style.display = "none";
}

closeDiretor.onclick = function() {
    modalDiretor.style.display = "none";
}

// Fechar ao clicar fora da janela do modal
window.onclick = function(event) {
    if (event.target === modalSinopse) {
        modalSinopse.style.display = "none";
    }
    if (event.target === modalDiretor) {
        modalDiretor.style.display = "none";
    }
}