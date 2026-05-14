function compararNumeros(){
    const campoNumero1 = document.getElementById("numero01");
    const numero1 = campoNumero1.value;
    const campoNumero2 = document.getElementById("numero02");
    const numero2 = campoNumero2.value;
    if (numero1 > numero2){
        alert(`${numero1} é maior que ${numero2}`)
    } else if (numero1 < numero2){
        alert(`${numero2} é maior que ${numero1}`)
    } else if (numero1 === numero2){
        alert(`Os dois números são iguais`)
    } else {
        alert(`Erro, digite valores apropriados!`)
    }
    return
}
function exercicio02ClassificarIdade(){
    const campoNome = document.getElementById("nome1");
    const nome = campoNome.value;
    const campoIdade = document.getElementById("idade1");
    const idade = campoIdade.value;
    if (idade < 18){
        alert(`Nome: ${nome}
Idade: ${idade}
Faixa etária: Menor de idade`);
    } else if (idade >= 18){
        alert(`Nome: ${nome}
Idade: ${idade}
Faixa etária: Maior de idade`)
    } else {
        alert("Erro, digite os valores corretamente!")
    }
    return
}
function exercicio03CalcularMediaEscolar(){
    const campoNota1 = document.getElementById("nota1");
    const nota1 = parseInt(campoNota1.value);
    const campoNota2 = document.getElementById("nota2");
    const nota2 = parseInt(campoNota2.value);
    const campoNota3 = document.getElementById("nota3");
    const nota3 = parseInt(campoNota3.value);
    let mediaNota = (nota1 + nota2 + nota3) / 3;
    const campoMostrar = document.getElementById("mostrarNota")
    if (mediaNota >= 7){
        campoMostrar.value = (`Média: ${mediaNota.toFixed(1)}
Aluno aprovado`)
    } else if (mediaNota < 7){
        campoMostrar.value = (`Média: ${mediaNota.toFixed(1)}
Aluno reprovado`)
    } else {
        campoMostrar.value = ("Erro")
    }
    return
}