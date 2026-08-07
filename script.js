const likes = document.querySelectorAll(".like");
const deslikes = document.querySelectorAll(".deslike");

likes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const span = botao.querySelector("span");
        span.textContent = Number(span.textContent) + 1;
    });
});

deslikes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const span = botao.querySelector("span");
        span.textContent = Number(span.textContent) + 1;
    });
});
