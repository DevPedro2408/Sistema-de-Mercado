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
let resultadoTable = document.getElementById("resultadoTable")

let produtos = JSON.parse(localStorage.getItem("@listaProdutos")) || []

function novoProduto() {
    let codigoBarras = Number(codigoDeBarras.value)
    let cdInterno = Number(codigoInterno.value)
    let precoVendaValue = Number(precoVenda.value)
    let estoqueValue = Number(quantidadeEstoque.value)
    let estoqueMinimoValue = Number(estoqueMinimo.value)

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
    
    // Verifica se o produto ja existe, se não ele retorna -1
    let verificacaoProdutos = produtos.findIndex(elementsProdutos => {
        return elementsProdutos.codigoBarrasObj === codigoBarras
    })

    //Verifico se o input esta vazio
    let campoVazio = inputsCodigoBarras.some(inputElementos => {
        return inputElementos.value === ""
    })

    let statusResul = ""
    let acoesResul = "Excluir"

    let diferenca = estoqueValue - estoqueMinimoValue
    // Colocar para ter cores especificas cada um.
    if (diferenca >= 40) {
        statusResul = "Muito alto"  

    } else if (diferenca >= 20) {
        statusResul = "Alto"

    } else if (diferenca >= 0) {
        statusResul = "Normal"

    } else if (diferenca >= -10) {
        statusResul = "Baixo"

    } else {
        statusResul = "Muito baixo"
    }

    if (verificacaoProdutos === -1 && !campoVazio) {
        produtos.push({
            codigoBarrasObj: codigoBarras, 
            codigoInternoObj: cdInterno, 
            descricaoObj: descricao.value, 
            precoVendaObj: precoVendaValue, 
            estoqueObj: estoqueValue,
            estoqueMinimoObj: estoqueMinimoValue, 
            statusObj: statusResul,
            acoes: acoesResul, //fazer o botao excluir la em adicionarProdutos() !!!
            categoriaObj: categoria.value
        })
        
        inputsCodigoBarras.forEach(inputsValue => inputsValue.value = "")

        adicionarProdutos()
        salvarDados()
    } else if (!(verificacaoProdutos === -1)){
        //  Fazer uma mensagem para aparecer la no site
        console.log("Produto já existe, clique em Salvar para editar")
    }
    
    console.log(produtos)
}

adicionarProdutos()

function adicionarProdutos() {
    resultadoTable.innerHTML = ""
    console.log("Produtos adicionados ao HTML")
    let cont = 1

    produtos.forEach(produtosElements => {
        let addProduto = document.createElement("tr")

        addProduto.innerHTML = `<th>${cont++}</th>
        <th>${produtosElements.codigoBarrasObj}</th>
        <th>${produtosElements.codigoInternoObj}</th> 
        <th>${produtosElements.categoriaObj}</th>
        <th>${produtosElements.descricaoObj}</th> 
        <th>${produtosElements.precoVendaObj}</th> 
        <th>${produtosElements.estoqueObj}</th> 
        <th>${produtosElements.estoqueMinimoObj}</th> 
        <th>${produtosElements.statusObj}</th> 
        <th>${produtosElements.acoes}</th>`

        resultadoTable.appendChild(addProduto)
    })

}

function excluirProduto() {
    
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


//Coloque o botao salvar para salvar as alterações quando clicarem no botao Editar

function salvarDados() {
    localStorage.setItem("@listaProdutos", JSON.stringify(produtos))
}