
let produtos = [];

const btnAbrirCadastro = document.getElementById("btnAbrirCadastro");
const cadastro = document.getElementById("cadastro");
const btnSalvar = document.getElementById("btnSalvar");
const btnCancelar = document.getElementById("btnCancelar");
const tabela = document.getElementById("tabelaProdutos");
const inputNome = document.getElementById("inputNome");
const inputPreco = document.getElementById("inputPreco");
const inputQtd = document.getElementById("inputQtd");

btnAbrirCadastro.addEventListener("click", () => {
    cadastro.style.display = "block";
});
btnCancelar.addEventListener("click", () => {
    cadastro.style.display = "none";
    limparCampos();
});

btnSalvar.addEventListener("click", () => {
    const nome = inputNome.value;
    const preco = parseFloat(inputPreco.value);
    const qtd = parseInt(inputQtd.value);

    if(!nome , !preco || !qtd) {
        alert("Preencha todos os campos corretamente!");
        return;
    }
    const produto = { nome, preco, qtd };
    produtos.push(produto);

    atualizarTabela();
    limparCampos();
    cadastro.style.display = "none";
});
function atualizarTabela() {
    
    tabela.innerHTML = `
        <tr>
            <td>Nome</td>
            <td>Preço</td>
            <td>Quantidade</td>
            <td>Valor Total</td>
            <td>Ações</td>
        </tr>
    `;
    produtos.forEach((produto, index) => {
        const linha = tabela.insertRow();
        linha.innerHTML = `
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>${produto.qtd}</td>
            <td>R$ ${(produto.preco * produto.qtd).toFixed(2)}</td>
            <td><button onclick="removerProduto(${index})">Remover</button></td>
        `;
    });
}
function removerProduto(index) {
    produtos.splice(index, 1);
    atualizarTabela();
}

function limparCampos() {
    inputNome.value = "";
    inputPreco.value = "";
    inputQtd.value = "";
}
