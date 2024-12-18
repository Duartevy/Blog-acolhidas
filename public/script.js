// Mensagem de boas-vindas
document.addEventListener("DOMContentLoaded", function () {
    alert("Bem-vinda ao Blog Acolhidas! Compartilhe suas histórias com a gente.");
});

// Selecionar elementos
const storyInput = document.getElementById("story-input");
const submitStory = document.getElementById("submit-story");
const storyList = document.getElementById("story-list");

// Adicionar evento ao botão de envio
submitStory.addEventListener("click", () => {
    const storyText = storyInput.value.trim(); // Obter o texto da história

    // Validar se o texto não está vazio
    if (storyText === "") {
        alert("Por favor, escreva uma história antes de enviar.");
        return;
    }

    // Criar um novo item de lista para a história
    const listItem = document.createElement("li");
    listItem.textContent = storyText;
    listItem.style.padding = "10px";
    listItem.style.marginBottom = "10px";
    listItem.style.border = "1px solid #ddd";
    listItem.style.borderRadius = "5px";
    listItem.style.backgroundColor = "#ffe6e6";

    // Adicionar botões de reação
    const buttonsContainer = document.createElement("div");
    buttonsContainer.style.marginTop = "10px";

    const likeButton = document.createElement("button");
    likeButton.textContent = "👍 Like";
    likeButton.style.marginRight = "10px";
    likeButton.addEventListener("click", () => {
        alert("Você curtiu esta história!");
    });

    const loveButton = document.createElement("button");
    loveButton.textContent = "❤️ Amei";
    loveButton.style.marginRight = "10px";
    loveButton.addEventListener("click", () => {
        alert("Você amou esta história!");
    });

    const congratsButton = document.createElement("button");
    congratsButton.textContent = "🎉 Parabéns";
    congratsButton.addEventListener("click", () => {
        alert("Você parabenizou esta história!");
    });

    // Adicionar os botões ao container e à história
    buttonsContainer.appendChild(likeButton);
    buttonsContainer.appendChild(loveButton);
    buttonsContainer.appendChild(congratsButton);
    listItem.appendChild(buttonsContainer);

    // Adicionar a história à lista
    storyList.appendChild(listItem);

    // Limpar o campo de texto
    storyInput.value = "";
});



