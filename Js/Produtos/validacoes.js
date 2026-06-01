function verificarInputVazio() {
    //Encontra os inputs que estão vazio
    return inputsCodigoBarras.filter( inputelements => inputelements.value === "")
}

function verificarInputsPreenchidos() {
    //Encontra os inputs que estão preenchidos
    return inputsCodigoBarras.filter(elementsPreechidos => elementsPreechidos.value !== "") 
}

function validarCampos(inputVazio, inputPreenchido) {
    inputsCodigoBarras.forEach(elementsInput => {
        if(elementsInput.value === "") {
            inputVazio.forEach(elementVazio => elementVazio.classList.add("inputVazio"))
        } else {
            inputPreenchido.forEach(elementPreenchidos => elementPreenchidos.classList.remove("inputVazio"))
        }
    })
}

function statusFunction(estoqueValor, estoqueMinimoValor) {
    let diferenca = estoqueValor - estoqueMinimoValor
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
}