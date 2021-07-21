class Pessoa {
  String nome;
  String _cpf; //privado por ter UNDERLINE__
  double peso;
  double _altura; //privado

  Pessoa(
      [this.nome = '',
      this._cpf = '000.000.000-00',
      this.peso = 0.0,
      this._altura = 0.0]);

  // não tem parametro retorna algo
  String get getCpf {
    return _cpf;
  }

  // tem paramentro não retorna
  set setCpf(String cpf) {
    if (cpf.length != 14) {
      print('CPF inválido');
      print('-------------------------------');
    } else {
      this._cpf = cpf;
    }
  }

  double get getAltura {
    return _altura;
  }

  set setAltura(double altura) {
    if (altura < 0 && altura > 2.5) {
      print('altura invádlia');
      print('------------');
    } else {
      this._altura - altura;
    }
  }
}

void main() {
  Pessoa paciente = new Pessoa();
  paciente.nome = 'asdasda';
  paciente.setCpf = '123.123.123-23';
  paciente.setAltura = 1;
  paciente.peso = 80;

  print('Nome: ${paciente.nome}');
  print('CPF: ${paciente.getCpf}');
  print('Altura: ${paciente.getAltura}');
  print('Peso: ${paciente.peso}');
}
