let codigoDeBarras = document.getElementById("codigo-barras")
let codigoInterno = document.getElementById("codigo-interno")
let descricao = document.getElementById("descricao")
let categoria = document.getElementById("categoria")
let quantidadeEstoque = document.getElementById("quantidade-estoque")
let estoqueMinimo = document.getElementById("estoque-minimo")
let precoVenda = document.getElementById("preco-venda")

produtos = []

function salvar() {
    
}

function novoProduto() {
    let codigoBarras = Number(codigoDeBarras.value)

    console.log(codigoDeBarras)
}

function cancelar() {

}

function excluir() {

}





//Leitor de código de barras
// const codeReader = new ZXing.BrowserBarcodeReader()

// codeReader.decodeFromVideoDevice(null, 'camera', (result, err) => {

//     if (result) {

//         let codigo = result.text

//         document.getElementById("codigo").value = codigo

//         console.log("Código detectado:", codigo)
//     }
// })