function novoProduto() {
    let codigoBarras = Number(codigoDeBarras.value)
    let cdInterno = Number(codigoInterno.value)
    let precoVendaValue = Number(precoVenda.value)
    let estoqueValue = Number(quantidadeEstoque.value)
    let estoqueMinimoValue = Number(estoqueMinimo.value)

    let inputsVazios = verificarInputVazio()   

    let inputsPreenchidos = verificarInputsPreenchidos()

    validarCampos(inputsVazios, inputsPreenchidos)
    
    // Verifica se o produto ja existe, se não ele retorna -1
    let verificacaoProdutos = produtos.findIndex(elementsProdutos => {
        return elementsProdutos.codigoBarrasObj === codigoBarras
    })

    //Verifico se o input esta vazio
    let campoVazio = inputsCodigoBarras.some(inputElementos => {
        return inputElementos.value === ""
    })

    statusFunction(estoqueValue, estoqueMinimoValue)

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

function salvar() {
    let codigoBarras = Number(codigoDeBarras.value)
    let cdInterno = Number(codigoInterno.value)
    let precoVendaValue = Number(precoVenda.value)
    let estoqueValue = Number(quantidadeEstoque.value)
    let estoqueMinimoValue = Number(estoqueMinimo.value)

    let inputsVazios = verificarInputVazio()
    let inputPreenchido = verificarInputsPreenchidos()

    validarCampos(inputsVazios, inputPreenchido)

    statusFunction(estoqueValue, estoqueMinimoValue)

    let campoVazio = inputsCodigoBarras.some(eleVazio => eleVazio.value === "")

    let verificarCodigoBarras = produtos.some(eleProdutos => eleProdutos.codigoBarrasObj === codigoBarras)

    if (campoVazio) {
        console.log("Preencha os campos vazios!")
    }

    if (!verificarCodigoBarras && !campoVazio) {
        console.log("Clique em Novo Produto para adicionar o produto")
    }

    if (verificarCodigoBarras && !campoVazio) {
        produtos[indiceEditando].codigoBarrasObj = codigoBarras
        produtos[indiceEditando].codigoInternoObj = cdInterno
        produtos[indiceEditando].categoriaObj = categoria.value
        produtos[indiceEditando].descricaoObj = descricao.value
        produtos[indiceEditando].precoVendaObj = precoVendaValue
        produtos[indiceEditando].estoqueObj = estoqueValue
        produtos[indiceEditando].estoqueMinimoObj = estoqueMinimoValue
        produtos[indiceEditando].statusObj = statusResul

        inputsCodigoBarras.forEach(limparInput => limparInput.value = "")
        
        salvarDados()
        adicionarProdutos()

        //Estou preso aui, tenho ue dar um jeito de conseguir o indice do produto
    }
}

function excluirProduto(indiceExcluir, buttonExcluir) {
    buttonExcluir.addEventListener("click", () => {
        let indiceProdutoExcluido = indiceExcluir
        produtos.splice(indiceProdutoExcluido, 1)

        salvarDados()
        adicionarProdutos()
    })
}

function editar(indiceEditar, buttonEditar) {
    buttonEditar.addEventListener("click", () => {
        indiceEditando = indiceEditar

        codigoDeBarras.value = produtos[indiceEditando].codigoBarrasObj
        codigoInterno.value = produtos[indiceEditando].codigoInternoObj
        descricao.value = produtos[indiceEditando].descricaoObj
        categoria.value = produtos[indiceEditando].categoriaObj
        quantidadeEstoque.value = produtos[indiceEditando].estoqueObj
        estoqueMinimo.value = produtos[indiceEditando].estoqueMinimoObj
        precoVenda.value = produtos[indiceEditando].precoVendaObj
    })
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

function excluir() {
    codigoDeBarras.value = ""
    codigoInterno.value = ""
    descricao.value = ""
    categoria.value = ""
    quantidadeEstoque.value = ""
    estoqueMinimo.value = ""
    precoVenda.value = ""
}

