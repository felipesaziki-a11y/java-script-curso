function cadastrarProduto(){
    const nomeProduto = prompt("Digite um produto");
    const precoProduto = parseFloat(prompt("Digite o preço do produto"));
    const categoriaProduto = prompt("Digite a categoria do produto");
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";
    produto = {
        nome: nomeProduto,
        preco: precoProduto,
        categoria: categoriaProduto
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(produto)
    })
    .then(response => response.json()) 
    .then(produto => {
            alert("Produto foi cadastrada com sucesso")
    })
    .catch(error => {
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar cadastrar o produto");
    })
}
function listarProdutos(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";

    const textarea = document.getElementById("produtos");

    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(produto => {
            for (let i = 0; i < produto.length; i++) {
                const produtos = produto[i];
                const texto = `${produtos.id} | ${produtos.nome} | R$ ${produtos.preco} | ${produtos.categoria}\n`;
                textarea.value = textarea.value + texto;
            }
        })
        .catch(error => {
            // Código executado quando ocorre algum erro
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar listar as empresas");
        })
}
function consultarProdutoPorId() {
    const idParaConsultar = parseInt(prompt("Digite o id para consultar"));
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + idParaConsultar;
    const textarea = document.getElementById("produtos");

    // limpar o textoarea
    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(produto => {
            const texto = `ID: ${produto.id}\nNome: ${produto.nome}\nPreço: R$ ${produto.preco}\nCategoria: ${produto.categoria}`;
            textarea.value = textarea.value + texto;
        })
        .catch(error => {
            // Código executado quando ocorre algum erro
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar listar as empresas");
        })
}
function editarProduto() {
    const idParaEditar = parseInt(prompt("Digite o id para consultar"));
    const novoProduto = prompt("Digite o novo produto");
    const novoPreco = parseFloat(prompt("Digite o novo preço"));
    const novaCategoria = prompt("Digite uma nova categoria");

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + idParaEditar;
    const produto = {
        nome: novoProduto,
        preco: novoPreco,
        categoria: novaCategoria
    }

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
    })
        .then(response => response)
        .then(produtos => {
            alert("Produto alterado com sucesso");
            listarProdutos();
        })
        .catch(error => {
            // Código executado quando ocorre algum erro
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar alterar a empresa");
        })
}
function apagarProduto() {
    const idParaApagar = parseInt(prompt("Digite o id para consultar"));

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + idParaApagar;
    const produto = {
        nome: "",
        preco: "",
        categoria: ""
    }
    fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
    })
        .then(response => response)
        .then(produto => {
            alert("Produto removido com sucesso");
            listarProdutos();
        })
        .catch(error => {
            // Código executado quando ocorre algum erro
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar alterar a empresa");
        })
}