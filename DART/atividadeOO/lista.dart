/**LISTAS--------- */
class Aluno {
  String nome;
  double nota;

  Aluno({required this.nome, required this.nota});
}

/**COMPOSIÇÂO-------- */
class Conta {
  Cliente cliente;
  String nomeBanco;
  int agencia;
  int codigo;
  double saldo;

  Conta(
      {required this.cliente,
      required this.nomeBanco,
      required this.agencia,
      required this.codigo,
      required this.saldo});
}

class Cliente {
  String nomeCliente;
  String cpf;
  String celular;

  Cliente(
      {required this.nomeCliente, required this.cpf, required this.celular});
}

void main() {
  /**--------listas------------- */
  // List<Aluno> alunos = [];

  // //inserindo informações na lista list()
  // alunos.add(Aluno(nome: 'jao', nota: 8));
  // alunos.add(Aluno(nome: 'jouus', nota: 8));
  // alunos.add(Aluno(nome: 'jasd', nota: 8));
  // alunos.add(Aluno(nome: 'jhqwedd', nota: 8));

  // for (var aluno in alunos) {
  //   print('Nome: ${aluno.nome} \t | Nota: ${aluno.nota}');
  // }

  /**----------composição----------- */

  var conta1 = new Conta(
      cliente: new Cliente(
          nomeCliente: 'José', cpf: '123.456.789.11', celular: '03232323232'),
      nomeBanco: 'bb',
      agencia: 1226,
      codigo: 013,
      saldo: 1000);

  print(
      '--------------------------------\n\tDADOSBANCARIOS\n--------------------------------\n');
  print('Banco: ${conta1.nomeBanco}');
  print('Ag   : ${conta1.agencia}');
  print('Códig: ${conta1.codigo}');
  print('Nome : ${conta1.cliente.nomeCliente}');
  print('CPF  : ${conta1.cliente.cpf}');
  print('Saldo: ${conta1.saldo}');
}
