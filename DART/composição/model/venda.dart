import 'cliente.dart';
import 'venda_item.dart';

class Venda {
  //pede cliente
  Cliente cliente;

  List<VendaItem> itens;

  //Construtor
  Venda({required this.cliente, this.itens = const []});

  //calcular valor total
  //Metodo especial
  double get valorTotal {
    return itens
        .map((item) => item.preco * item.quantidade)
        .reduce((total, atual) => total + atual);
  }
}
