let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    exibirCarrinho();
}


function exibirCarrinho() {
    const carrinhoDiv = document.getElementById("carrinho");
    carrinhoDiv.innerHTML = ""; 

    let total = 0;

    carrinho.forEach(item => {
        carrinhoDiv.innerHTML += `<p>${item.produto} - R$ ${item.preco.toFixed(2)}</p>`;
        total += item.preco;
    });

    if (carrinho.length > 0) {
        carrinhoDiv.innerHTML += `<h4>Total: R$ ${total.toFixed(2)}</h4>`;
        carrinhoDiv.innerHTML += '<button onclick="limparCarrinho()">Limpar Carrinho</button>';
    } else {
        carrinhoDiv.innerHTML += "<p>O carrinho está vazio.</p>";
    }
}


function limparCarrinho() {
    carrinho = []; 
    exibirCarrinho(); 
}

