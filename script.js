// Seleciona os elementos
const postInput = document.querySelector("textarea");
const postButton = document.querySelector("button");
const postList = document.getElementById("posts");

// Função para carregar posts salvos no localStorage
function loadPosts() {
  const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
  savedPosts.forEach(post => addPostToDOM(post));
}

// Função para salvar posts no localStorage
function savePosts() {
  const posts = [];
  document.querySelectorAll("#posts li").forEach(li => {
    posts.push(li.querySelector("span").innerText);
  });
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Função para adicionar post no DOM
function addPostToDOM(text) {
  const li = document.createElement("li");

  const content = document.createElement("span");
  content.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Excluir";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => {
    li.remove();
    savePosts();
  };

  li.appendChild(content);
  li.appendChild(deleteBtn);
  postList.appendChild(li);
}

// Evento de clique no botão
postButton.addEventListener("click", () => {
  const text = postInput.value.trim();
  if (text !== "") {
    addPostToDOM(text);
    savePosts();
    postInput.value = "";
  }
});

// Carregar posts ao abrir a página
loadPosts();