function mostrarInputComercial(){
    const divCampoComercial = document.getElementById("campo-contato-comercial");
    divCampoComercial.classList.remove("hidden");

    const divCampoPessoal = document.getElementById("campo-contato-pessoal");
    divCampoPessoal.classList.add("hidden")
}
function mostrarInputPessoal(){
    const divCampoPessoal = document.getElementById("campo-contato-pessoal");
    divCampoPessoal.classList.remove("hidden");

    const divCampoComercial = document.getElementById("campo-contato-comercial");
    divCampoComercial.classList.add("hidden")
}
function confirmarContato(){
    let contatos = "";
    const divNome = document.getElementById("campo-nome");
    const colaborador = divNome.value;

    const tipoContato = document.querySelector("[name='campo-tipo']:checked");
    const contato = tipoContato.value;
    if (contato.value = "Comercial"){
    const tipoContatoComercial = document.getElementById("contato-comercial");
    contatos = tipoContatoComercial.value;
    } else if (contato.value = "Pessoal"){
    const tipoContatoPessoal = document.getElementById("contato-pessoal");
    contatos = tipoContatoPessoal.value;
    }
    const campoResultado = document.getElementById("resultado");
    campoResultado.value = (`Nome do Colaborador: ${colaborador}
Tipo de contato: ${contato}
Contato: ${contatos}`)
    contatos = "";
}