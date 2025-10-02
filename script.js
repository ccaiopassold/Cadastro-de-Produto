
function Produto(nome, preco, qtd) {
    return {
        nome,
        preco: parseFloat(preco),
        qtd: parseInt(qtd),
        valorTotal() {
            return this.preco * this.qtd;
        }
    };
}


const GerenciarProdutos = {
    produtos: [],
    tabela: document.getElementById("tabelaProdutos"),

    adicionar(produto) {
        this.produtos.push(produto);
        this.atualizarTabela();
    },

    remover(index) {
        this.produtos.splice(index, 1);
        this.atualizarTabela();
    },

    atualizarTabela() {
        this.tabela.innerHTML = `
            <tr>
                <td>Nome</td>
                <td>Preço</td>
                <td>Quantidade</td>
                <td>Valor Total</td>
                <td>Ações</td>
            </tr>
        `;

        this.produtos.forEach((produto, index) => {
            const linha = this.tabela.insertRow();
            linha.innerHTML = `
                <td>${produto.nome}</td>
                <td>R$ ${produto.preco.toFixed(2)}</td>
                <td>${produto.qtd}</td>
                <td>R$ ${produto.valorTotal().toFixed(2)}</td>
                <td><button onclick="GerenciarProdutos.remover(${index})">Remover</button></td>
            `;
        });
    }
};

const btnAbrirCadastro = document.getElementById("btnAbrirCadastro");
const cadastro = document.getElementById("cadastro");
const btnSalvar = document.getElementById("btnSalvar");
const btnCancelar = document.getElementById("btnCancelar");
const inputNome = document.getElementById("inputNome");
const inputPreco = document.getElementById("inputPreco");
const inputQtd = document.getElementById("inputQtd");

function limparCampos() {
    inputNome.value = "";
    inputPreco.value = "";
    inputQtd.value = "";
}


btnAbrirCadastro.addEventListener("click", () => {
    cadastro.style.display = "block";
});

btnCancelar.addEventListener("click", () => {
    cadastro.style.display = "none";
    limparCampos();
});

btnSalvar.addEventListener("click", () => {
    const nome = inputNome.value.trim();
    const preco = parseFloat(inputPreco.value);
    const qtd = parseInt(inputQtd.value);

    if (!nome || isNaN(preco) || isNaN(qtd)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const produto = Produto(nome, preco, qtd);
    GerenciarProdutos.adicionar(produto);

    limparCampos();
    cadastro.style.display = "none";
});
