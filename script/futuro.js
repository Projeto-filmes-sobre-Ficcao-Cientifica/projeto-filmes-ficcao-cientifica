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
    modalSinopse.classList.add("active");
}

btnDiretor.onclick = function() {
    modalDiretor.classList.add("active");
}

// Fechar nos botões (X)
closeSinopse.onclick = function() {
    modalSinopse.classList.remove("active");
}

closeDiretor.onclick = function() {
    modalDiretor.classList.remove("active");
}

// Fechar ao clicar fora da caixa do modal
window.onclick = function(event) {
    if (event.target === modalSinopse) {
        modalSinopse.classList.remove("active");
    }
    if (event.target === modalDiretor) {
        modalDiretor.classList.remove("active");
    }
}