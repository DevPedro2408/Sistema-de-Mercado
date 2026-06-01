let produtos = JSON.parse(localStorage.getItem("@listaProdutos")) || []

function salvarDados() {
    localStorage.setItem("@listaProdutos", JSON.stringify(produtos))
}