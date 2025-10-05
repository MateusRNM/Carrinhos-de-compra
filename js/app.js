const productSelect = document.getElementById('produto');
const qtdInput = document.getElementById('quantidade');
const lista = document.getElementById('lista-produtos');
const valorTotal = document.getElementById('valor-total');
let valorFinal = 0;

function adicionar(){
    const quantidade = parseInt(qtdInput.value);
    if(quantidade <= 0){
        return;
    }
    const produto = productSelect.value;
    const valor = parseFloat(produto.split('R$')[1]);
    const produtoNome = produto.split('-')[0];
    valorFinal += valor * quantidade;
    lista.innerHTML += `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${valor}</span>
            </section>`;
    valorTotal.innerHTML = `R$ ${valorFinal}`;
}

function limpar(){
    lista.innerHTML = '';
    valorFinal = 0;
    valorTotal.innerHTML = 'R$ 0';
}