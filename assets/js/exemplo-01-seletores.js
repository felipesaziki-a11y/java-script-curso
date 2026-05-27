function concatenar(){
    // get element by = pegar elemento por Id
    const campoNome = document.getElementById("nome");
    const nome = campoNome.value;

    const campoSobrenome = document.getElementById("sobrenome");
    const sobrenome = campoSobrenome.value;

    alert("Nome completo: " + nome + " " + sobrenome);
    // ou
    alert(`Nome completo: ${nome} ${sobrenome}`)
}
function verificarPar(){
    const campoNumero01 = document.getElementById("numero01");
    const numero01 = parseInt(campoNumero01.value);
    if (numero01 % 2 === 0){
        alert(`${numero01} é um número par`);
    } else {
        alert(`${numero01} é um número ímpar`);
    }
    campoNumero01.value = "";

    campoNumero01.focus();
}
function processarPedido(){
    const campoCliente = document.getElementById("cliente");
    const cliente = campoCliente.value;

    const campoQuantidadeLicencas = document.getElementById("quantidade-licencas");
    const quantidadeLicencas = parseInt(campoQuantidadeLicencas.value);

    const campoTipo = document.querySelector("[name='tipo']:checked");
    const tipo = campoTipo.value;
    if((tipo !== "ERP") && (tipo !== "Hospital") && (tipo !== "Oficina") && (tipo !== "Restaurante")){
        alert("Selecione um tipo");
        return
    }
    const campoPlano = document.getElementById("plano");
    const plano = campoPlano.value;
    if((plano !== "Básico") && (plano !== "Intermediário") && (plano !== "Avançad")){
        alert("Selecione um plano");
        return
    }
    const campoDataEncerramento = document.getElementById("data-encerramento")
    const dataEncerramento = campoDataEncerramento.value;

    const campoBackup = document.getElementById("backup");
    const backup = campoBackup.checked;

    let precoBase = 0;
    if(tipo === "ERP"){
        precoBase = 25_000;
    } else if (tipo === "Hospital"){
        precoBase = 40_000
    } else if (tipo === "Oficina"){
        precoBase = 10_000
    } else if(tipo === "Restaurante"){
        precoBase = 5_000
    } else {
        alert("Selecione um tipo")
        return
    }
    
    let multiplicadorPlano = 1.0;
    if(plano === "Intermediário"){
        multiplicadorPlano = 1.5
    } else if(plano === "Avançado"){
        multiplicadorPlano = 2.0
    }

    let total = quantidadeLicencas * precoBase * multiplicadorPlano;
    const campoResultado = document.getElementById("resultado");
    campoResultado.value = `Cliente: ${cliente}
Quantidade de licenças: ${quantidadeLicencas}
Tipo: ${tipo}
Plano: ${plano}
Data de Encerramento: ${dataEncerramento}
Preço base: R$${precoBase.toFixed(2)}
Multiplicador do plano: ${multiplicadorPlano}
Total: ${total}`;
}