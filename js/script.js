const btn = document.querySelector(".button-midia");
const painel = document.querySelector(".container__social");

btn.addEventListener("click", ()=>{
    painel.classList.toggle("ativo");
});