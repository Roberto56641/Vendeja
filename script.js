// Quando o usuário envia um anúncio
function publicarAnuncio() {
  const produto = document.getElementById("produto").value;
  const descricao = document.getElementById("descricao").value;
  const preco = document.getElementById("preco").value;

  if (!produto || !descricao || !preco) {
    alert("Por favor, preencha todos os campos antes de publicar!");
    return;
  }

  const lista = document.getElementById("listaAnuncios");

  const anuncio = document.createElement("div");
  anuncio.classList.add("anuncio");
  anuncio.innerHTML = `
    <h3>${produto}</h3>
    <p>${descricao}</p>
    <strong>Preço: R$ ${preco}</strong>
    <hr>
  `;

  lista.appendChild(anuncio);

  // Limpar os campos
  document.getElementById("produto").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("preco").value = "";
}
