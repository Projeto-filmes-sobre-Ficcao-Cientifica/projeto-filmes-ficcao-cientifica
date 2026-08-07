
    document.addEventListener("DOMContentLoaded", () => {
   
    const btnSinopse = document.getElementById("btn-sinopse");
    const btnDiretor = document.getElementById("btn-diretor");

    const modalSinopse = document.getElementById("modal-sinopse");
    const modalDiretor = document.getElementById("modal-diretor");

    const closeSinopse = document.getElementById("close-sinopse");
    const closeDiretor = document.getElementById("close-diretor");


    btnSinopse.addEventListener("click", () => {
        modalSinopse.style.display = "block";
    });

    
    btnDiretor.addEventListener("click", () => {
        modalDiretor.style.display = "block";
    });

    
    closeSinopse.addEventListener("click", () => {
        modalSinopse.style.display = "none";
    });

    
    closeDiretor.addEventListener("click", () => {
        modalDiretor.style.display = "none";
    });

    
    window.addEventListener("click", (event) => {
        if (event.target === modalSinopse) modalSinopse.style.display = "none";
        if (event.target === modalDiretor) modalDiretor.style.display = "none";
    });
});