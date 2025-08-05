document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('1').style.display = "none";
    document.getElementById('2').style.display = "none";
    document.getElementById('3').style.display = "none";
});
let interruptor = null;
function botaoTexto(id) {
    const texto = document.getElementById(id);
    if (texto.style.display === "none" && interruptor === null) {
        texto.style.display = "block";
        interruptor = document.getElementById(id);
    } else if (texto.style.display === "none") {
        interruptor.style.display = "none";
        texto.style.display = "block";
        interruptor = document.getElementById(id);
    } else {
        texto.style.display = "none";
        interruptor = null;
    }
}
