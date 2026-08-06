
const modalSinopse = document.getElementById("modal-sinopse");
const btnSinopse = document.getElementById("btn-sinopse");
const closeSinopse = document.getElementById("close-sinopse");


const modalDiretor = document.getElementById("modal-diretor");
const btnDiretor = document.getElementById("btn-diretor");
const closeDiretor = document.getElementById("close-diretor");


btnSinopse.onclick = function() {
    modalSinopse.style.display = "block";
}

btnDiretor.onclick = function() {
    modalDiretor.style.display = "block";
}

// Eventos para fechar nos botões (X)
closeSinopse.onclick = function() {
    modalSinopse.style.display = "none";
}

closeDiretor.onclick = function() {
    modalDiretor.style.display = "none";
}

// Fechar qualquer modal se clicar fora dele
window.onclick = function(event) {
    if (event.target === modalSinopse) {
        modalSinopse.style.display = "none";
    }
    if (event.target === modalDiretor) {
        modalDiretor.style.display = "none";
    }
}