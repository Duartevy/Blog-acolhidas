// Seleciona os elementos
const storyInput = document.getElementById("story-input");
const submitStory = document.getElementById("submit-story");
const storyList = document.getElementById("story-list");

// Adiciona evento ao botão de enviar história
submitStory.addEventListener("click", () => {
  const storyText = storyInput.value.trim(); // Obtém o texto da história

  // Valida se o texto não está vazio
  if (storyText === "") {
    alert("Por favor, escreva uma história antes de enviar.");
    return;
  }

  // Cria um novo item de lista para a história
  const listItem = document.createElement("li");
  listItem.style.display = "flex";
  listItem.style.justifyContent = "space-between";
  listItem.style.alignItems = "center";

  // Adiciona o texto da história
  const storyContent = document.createElement("span");
  storyContent.textContent = storyText;
  listItem.appendChild(storyContent);

  // Cria o container dos botões de reação
  const reactionContainer = document.createElement("div");
  reactionContainer.classList.add("reaction-buttons");

  // Reações disponíveis
  const reactions = [
    { emoji: "👍", name: "like" },
    { emoji: "❤️", name: "love" },
    { emoji: "🎉", name: "congrats" }
  ];

  reactions.forEach(({ emoji, name }) => {
    const button = document.createElement("button");
    button.innerHTML = emoji; // Adiciona o emoji no botão
    button.dataset.reaction = name; // Adiciona um identificador para a reação

    // Cria o contador de reações
    const counter = document.createElement("span");
    counter.classList.add("reaction-count");
    counter.textContent = "0";
    button.appendChild(counter);

    // Adiciona evento de clique para incrementar o contador
    button.addEventListener("click", () => {
      const currentCount = parseInt(counter.textContent, 10);
      counter.textContent = currentCount + 1; // Incrementa o contador
    });

    reactionContainer.appendChild(button);
  });

  listItem.appendChild(reactionContainer);
  storyList.appendChild(listItem); // Adiciona a história na lista

  // Limpa o campo de texto
  storyInput.value = "";
});
