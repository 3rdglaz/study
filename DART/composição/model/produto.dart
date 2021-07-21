class Produto {
  int codigo;
  String nome;
  double preco;
  double desconto;

  //consturct
  Produto(
      {required this.codigo,
      required this.nome,
      required this.preco,
      required this.desconto});

  double get precoComDesconto {
    // exemplo: dar 20% = 1- .2 = 80% do valor
    return (1 - desconto) * preco;
  }
}
