function alternarVisibilidadeBotao(){
    // Busca no HTML o elemento que possui o id "caixa-01"
    const divCaixa01 = document.getElementById("caixa-01");
    // Busca no HTML o botão que possui o id "botao-alternar-visibilidade"
    const botaoAlternarVisibilidade = document.getElementById("botao-alternar-visibilidade");
    // Verifica se a caixa está sem valor de display ou escondida
    if (divCaixa01.style.display === "" || divCaixa01.style.display === "none"){
        // Mostra a caixa
        divCaixa01.style.display = "block";
        // Altera o texto do botão
        botaoAlternarVisibilidade.innerText = "Ocultar"
    // E caso já esteja visível
    } else {
        // Oculta a caixa
        divCaixa01.style.display = "none";
        // Altera o texto do botão
        botaoAlternarVisibilidade.innerText = "Apresentar"
    }
}
function redefinirCor(){
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList = [];
}
function mudarVermelho(){
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList = [];
    divCaixa01.classList.add("caixa-vermelha")
}
function mudarAzul(){
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList = [];
    divCaixa01.classList.add("caixa-azul")
}
function apresentarCampoPessoaFisica(){
    const divCampoCpf = document.getElementById("campo-pf")
    divCampoCpf.classList.remove("hidden")
    
    const divCampoCnpj = document.getElementById("campo-pj")
    divCampoCnpj.classList.add("hidden")
}
function apresentarCampoPessoaJuridica(){
    const divCampoCnpj = document.getElementById("campo-pj")
    divCampoCnpj.classList.remove("hidden")
    
    const divCampoCpf = document.getElementById("campo-pf")
    divCampoCpf.classList.add("hidden")
}
function alterarImagem(event){
    if(event.key === "Enter"){
        
    }
}