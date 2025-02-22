//src/models/Produto
class Produto {
    constructor(codProduto, nome, preco, descricao) {
        this.codProduto = codProduto;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}
//module.exports = Produto;
export default Produto;
