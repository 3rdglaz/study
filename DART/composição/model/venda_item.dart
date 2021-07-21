import 'produto.dart';

class VendaItem {
  //precisa de produto
  // composição
  Produto produto;
  int quantidade;
  double? _preco;

  VendaItem({required this.produto, this.quantidade = 1});

  //Método especial
  double get preco {
    //pega preco com desconto
    _preco = produto.precoComDesconto;
    //retorna calculado
    return _preco!;
  }
}
