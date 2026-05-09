let codigoDeBarras = document.getElementById("codigo-barras")
let codigoInterno = document.getElementById("codigo-interno")
let descricao = document.getElementById("descricao")
let categoria = document.getElementById("categoria")
let quantidadeEstoque = document.getElementById("quantidade-estoque")
let estoqueMinimo = document.getElementById("estoque-minimo")
let precoVenda = document.getElementById("preco-venda")
let salvar = document.getElementById("salvar")
let ProdutoNovo = document.getElementById("novo-produto")
let cancelar = document.getElementById("cancelar")
let excluir = document.getElementById("excluir")
let inputsCodigoBarras = document.querySelectorAll(".inputsCodigoBarras")

let produtos = []

function novoProduto() {
    let codigoBarras = Number(codigoDeBarras.value)
    let cdInterno = Number(codigoInterno.value)
    let precoVendaValue = Number(precoVenda.value)
    let estoqueValue = Number(quantidadeEstoque.value)
    let estoqueMinimoValue = Number(estoqueMinimo.value)

    let statusResul = "Acabando"
    let acoesResul = "Excluir"

    let campoVazio = false

    inputsCodigoBarras.forEach(inputElementos => {
        if(inputElementos.value === "") {
            return campoVazio = true
        }
    })

    if (!campoVazio) {
        produtos.push({
                codigoBarrasObj: codigoBarras, 
                codigoInternoObj: cdInterno, 
                descricaoObj: descricao.value, 
                precoVendaObj: precoVendaValue, 
                estoqueObj: estoqueValue,
                estoqueMinimoObj: estoqueMinimoValue, 
                statusObj: statusResul,
                acoes: acoesResul,
                categoriaObj: categoria.value
        })
    }
    console.log(produtos)
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