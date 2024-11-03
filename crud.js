const produtos = [
    {
        nome: 'Teclado',
        valor: 250,
        estoque: 10
    },
    {
        nome: 'Mouse',
        valor: 150,
        estoque: 20
    }
];
const clientes = [
    {
        nome: 'Kelwin',
        saldo: 1500,
        produtos: []
    },
    {
        nome: 'Karla',
        saldo: 400,
        produtos: []
    }
];

    function criaProduto(nome, valor, estoque) {
        const obj = {
            nome: nome, valor: valor, estoque: estoque
        };
        produtos.push(obj);
    }

    // Ver Produtos (Read, Ler, Visualizar, Detalhes)

    function verProdutos() {
        console.log(produtos);
        return produtos;
    }

    /* Chamada de Function para testar a função criaProduto. Digita no terminal node crud.js 
    criaProduto('Monitor', 500, 1000);
    verProdutos(); */

    // Atualizar produtos

   function atualizaProduto(nome, novoValor, novoEstoque) {
const index = produtos.findIndex(item => item.nome == nome);
    
    if(novoValor) {
        produtos[index].valor = novoValor;
    }
    if(novoEstoque) {
        produtos[index].estoque = novoEstoque;
    }
}

//atualizaProduto(produtos[0].nome, 300, 300);
//verProdutos();

function excluirProduto(nome) {
    const index = produtos.findIndex(item => item.nome == nome);
    produtos.splice(index, 1);
}

excluirProduto('Mouse');
verProdutos()


