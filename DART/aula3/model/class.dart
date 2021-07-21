class Banco {
  //atributos
  String nome;
  int conta;

  // método construto
  Banco(this.nome, this.conta);

  //método para imprimir o usuário
  imprimirUsuario() {
    print(this.nome);
    print(this.conta);
  }
}
