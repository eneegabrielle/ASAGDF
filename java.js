
// Função de animação ao rolar a página (fade + slide)
const elementosAnimados = document.querySelectorAll(".fade-in, .animar-esquerda, .animar-topo, .animar-baixo");

function animarAoScroll() {
    const alturaTela = window.innerHeight - 100;

    elementosAnimados.forEach(el => {
        const pos = el.getBoundingClientRect().top;

        if (pos < alturaTela) {
            el.classList.add("aparecer");
        }
    });
}

document.addEventListener("scroll", animarAoScroll);
window.addEventListener("load", animarAoScroll);



// ANIMAÇÃO DA LOGO
const logo = document.querySelector(".logo");

if (logo) {
    // Efeito hover
    logo.addEventListener("mouseover", () => {
        logo.style.transform = "scale(1.12) rotate(1deg)";
        logo.style.transition = "0.4s ease";
    });

    logo.addEventListener("mouseout", () => {
        logo.style.transform = "scale(1) rotate(0deg)";
    });

    // Efeito clique: pulsação
    logo.addEventListener("click", () => {
        logo.style.transform = "scale(0.9)";
        setTimeout(() => {
            logo.style.transform = "scale(1.1)";
        }, 120);
        setTimeout(() => {
            logo.style.transform = "scale(1)";
        }, 250);
    });
}



// ANIMAÇÃO NO MENU

const linksMenu = document.querySelectorAll("nav a");

linksMenu.forEach(link => {
    link.style.transition = "0.3s";

    link.addEventListener("mouseover", () => {
        link.style.color = "#a5fca5";
        link.style.letterSpacing = "1px";
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "white";
        link.style.letterSpacing = "0px";
    });
});



//  ANIMAÇÃO SUAVE EM CARDS

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.style.transition = "0.4s ease";

    card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-6px) scale(1.02)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.25)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "translateY(0) scale(1)";
        card.style.boxShadow = "0 3px 6px rgba(0,0,0,0.15)";
    });
});



//  ANIMAÇÃO NAS IMAGENS DA GALERIA

const imagens = document.querySelectorAll(".galeria img");

imagens.forEach(img => {
    img.style.transition = "0.4s ease";

    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.06)";
        img.style.boxShadow = "0 8px 18px rgba(0,0,0,0.25)";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
        img.style.boxShadow = "0 3px 6px rgba(0,0,0,0.15)";
    });
});



// BOTÃO VOLTAR AO TOPO (criado automaticamente)

const botaoTopo = document.createElement("button");
botaoTopo.innerText = "↑";
botaoTopo.id = "btnTopo";

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "25px";
botaoTopo.style.right = "25px";
botaoTopo.style.padding = "12px 16px";
botaoTopo.style.fontSize = "18px";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.border = "none";
botaoTopo.style.background = "#1b5e20";
botaoTopo.style.color = "white";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
botaoTopo.style.display = "none";
botaoTopo.style.transition = "0.3s";

document.body.appendChild(botaoTopo);

botaoTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    botaoTopo.style.display = window.scrollY > 300 ? "block" : "none";
});


