const menuBotao = document.querySelector(".menu-botao");
const menu = document.querySelector("#menu");

if (menuBotao && menu) {
  menuBotao.addEventListener("click", () => {
    const aberto = menuBotao.getAttribute("aria-expanded") === "true";
    menuBotao.setAttribute("aria-expanded", String(!aberto));
    menu.classList.toggle("aberto", !aberto);
  });

  menu.addEventListener("click", (evento) => {
    if (evento.target instanceof HTMLAnchorElement) {
      menuBotao.setAttribute("aria-expanded", "false");
      menu.classList.remove("aberto");
    }
  });
}

const ano = document.querySelector("#ano");
if (ano) ano.textContent = String(new Date().getFullYear());
