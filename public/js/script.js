import ProdutoController from "../../src/controllers/ProdutoController.js";

let controller = new ProdutoController();
let newProduto1 = controller.criarProduto(1, "Notebook Acer", 3500, "notebook gamer acer");
let newProduto2 = controller.criarProduto(2, "Geladeira Consul", 4000, "Geladeira boa para gelar agua");
let newProduto3 = controller.criarProduto(3, "Televisão Samsung", 5000, "Tv boa para jogar video game");
let produtos = [newProduto1, newProduto2, newProduto3];

document.addEventListener('DOMContentLoaded', function() {
    let tabelaProduto = document.getElementById('tabelaProduto').getElementsByTagName('tbody')[0];
    produtos.forEach(item => {
        let novaLinha = tabelaProduto.insertRow();
        let celula1 = novaLinha.insertCell(0); 
        let celula2 = novaLinha.insertCell(1); 
        let celula3 = novaLinha.insertCell(2);
        let celula4 = novaLinha.insertCell(3);
        celula1.textContent = item.codProduto;
        celula2.textContent = item.nome; 
        celula3.textContent = item.preco; 
        celula4.textContent = item.descricao; 
    });
});

//console.log(`nome: ${newProduto1.nome} - preço: $${newProduto1.preco} - descrição: ${newProduto1.descricao}`);



