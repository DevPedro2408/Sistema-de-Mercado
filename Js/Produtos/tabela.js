function adicionarProdutos() {
    resultadoTable.innerHTML = ""
    
    console.log("Produtos adicionados ao HTML")
    let cont = 1

    produtos.forEach((produtosElements, indice) => {
        let addProduto = document.createElement("tr")

        let botaoEditar = document.createElement("button")
        botaoEditar.setAttribute("class", "btnEditar")
        botaoEditar.innerHTML = "Editar"

        let botaoExcluir = document.createElement("button")
        botaoExcluir.setAttribute("class", "btnExcluir")
        botaoExcluir.innerHTML = "x"

        addProduto.innerHTML = `
        <td>${cont++}</td>
        <td>${produtosElements.codigoBarrasObj}</td>
        <td>${produtosElements.codigoInternoObj}</td> 
        <td>${produtosElements.categoriaObj}</td>
        <td>${produtosElements.descricaoObj}</td> 
        <td>${produtosElements.precoVendaObj}</td> 
        <td>${produtosElements.estoqueObj}</td> 
        <td>${produtosElements.estoqueMinimoObj}</td> 
        <td>${produtosElements.statusObj}</td> 
        `

        // Tive que fazer isso para conseguir inserir os botões Editar e excluir.
        let tdAcoes = document.createElement("td")

        tdAcoes.append(botaoEditar, botaoExcluir)
        addProduto.appendChild(tdAcoes)
        
        excluirProduto(indice, botaoExcluir)
        editar(indice, botaoEditar)
        
        resultadoTable.appendChild(addProduto)
    })
}