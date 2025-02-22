import Produto from "../models/Produto.js";

class ProdutoController {
    constructor(){}

    criarProduto(codProduto, nome, preco, descricao) {
        let novoProduto = new Produto(codProduto, nome, preco, descricao);
        return novoProduto; 
    }
}
export default ProdutoController;










