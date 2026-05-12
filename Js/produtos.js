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
let inputsCodigoBarras = [...document.querySelectorAll(".inputsCodigoBarras")]

let produtos = []

function novoProduto() {
    let codigoBarras = Number(codigoDeBarras.value)
    let cdInterno = Number(codigoInterno.value)
    let precoVendaValue = Number(precoVenda.value)
    let estoqueValue = Number(quantidadeEstoque.value)
    let estoqueMinimoValue = Number(estoqueMinimo.value)

    let statusResul = "Acabando"
    let acoesResul = "Excluir"

    //Encontra os inputs que estão vazio
    let inputsVazios = inputsCodigoBarras.filter(inputelements => {
        return inputelements.value === ""
    })

    //Encontra os inputs que estão preenchidos
    let inputsPreenchidos = inputsCodigoBarras.filter(elementsPreechidos => {
        return elementsPreechidos.value !== ""
    })

    inputsCodigoBarras.forEach(elementsInput => {
        if(elementsInput.value === "") {
            inputsVazios.forEach(elementVazio => elementVazio.classList.add("inputVazio"))
        } else {
            inputsPreenchidos.forEach(elementVazi => elementVazi.classList.remove("inputVazio"))
        }
    })



    
    
    // Parei aqui!!!!!!!!!
    let igual = produtos.findIndex((elementsProdutos, uantidade, array) => {
        return elementsProdutos.codigo === codigoBarras
    })

    //Verifico se o input esta vazio
    let campoVazio = inputsCodigoBarras.some(inputElementos => {
        return inputElementos.value === ""
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
        
        inputsCodigoBarras.forEach(inputsValue => inputsValue.value = "")
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