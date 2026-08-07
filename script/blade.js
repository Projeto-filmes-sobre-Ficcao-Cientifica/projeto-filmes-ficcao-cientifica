const modalSinopse = document.getElementById("modal-sinopse");
const btnSinopse = document.getElementById("btn-sinopse");
const closeSinopse = document.getElementById("close-sinopse");

const modalDiretor = document.getElementById("modal-diretor");
const btnDiretor = document.getElementById("btn-diretor");
const closeDiretor = document.getElementById("close-diretor");

btnSinopse.onclick = function() {
    modalSinopse.classList.add("active");
}

btnDiretor.onclick = function() {
    modalDiretor.classList.add("active");
}

closeSinopse.onclick = function() {
    modalSinopse.classList.remove("active");
}

closeDiretor.onclick = function() {
    modalDiretor.classList.remove("active");
}

window.onclick = function(event) {
    if (event.target === modalSinopse) {
        modalSinopse.classList.remove("active");
    }
    if (event.target === modalDiretor) {
        modalDiretor.classList.remove("active");
    }
}