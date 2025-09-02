const form = document.getElementById("form-post");
const input = document.getElementById("input-post");
const posts = document.getElementById("posts");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const content = input.value.trim();
  
  if (content !== "") {
    const li = document.createElement("li");
    li.textContent = content;
    posts.prepend(li); // insere no topo
    input.value = "";
  }
});