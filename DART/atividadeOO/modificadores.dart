// class Retangulo {
//   static String cor = 'azul';
//   static int contorno = 1;

//   static void meuSetup() {
//     print('configura cor ...:');
//     print('configura contorno ...:');
//     print('configura base ...:');
//     print('configura altura ...:');
//   }
// }

// void main() {
//   //imprime os valores diretamente
//   print('A cor do retângulo é: ${Retangulo.cor}');
//   print('O contorno do retângulo é: ${Retangulo.contorno}');

//   //visualizando o método
//   Retangulo.meuSetup();
// }
// import 'dart:html';

class Conta {
  String banco;
  int? numero;
  double agencia;

  //contrução
  Conta({this.numero, required this.agencia, required this.banco});
}

/**----------------------------CLASSE ABSTRATA ----------------------*/
/*
classe abstrata serve pra impedir que uma classe possa ser instanciada,
é utlizada como PAI, para moldar outras classes, requer OVERRIDE para ser implementada

*/
abstract class Animal {
  String cor;
  double peso;
  String nome;

  //construct
  Animal({this.cor = '', this.peso = 0.0, this.nome = ''});

  //metodo vazio
  void correr();
}

// a classe que extende precisa SOBRESCREVER/override
// o método pai<abstract class Anima(){}>
class Cachorro extends Animal {
  @override //escreve no final da função abaixo.
  void correr() {
    print('corre');
  }
}

/**----------------------------método IMPLEMENTAÇÂO ----------------------*/
/**
 * é um acordo feito com uma classe que obriga a implementação disto na classe
 * 
 * é usado quanod há muitos objetos cque possuem um mesmo método
 * 
 * criamos uma classe abstrata para ser INTERFACE
 * OBS: não se pode ter VARIAS heranças, mas pode-se ter múltiplas implmentações
 */

abstract class Poliglota {
  void falarLingua() {
    print('fala portugues e ingles');
  }
}

abstract class MasterChefe {
  void cozinhar();
}

abstract class Pessoa {
  void falar() {
    print('Está falando alguma coisa ...');
  }
}

class Medico extends Pessoa implements Poliglota {
  @override //necessário pq as classes interfaces são abstratas. LER SOBRE ABSTRACT
  void falarLingua() {
    print('o medico fala alemão');
  }
}

class Arquiteto extends Pessoa implements Poliglota, MasterChefe {
  // @override
  void falarLingua() {
    print('o arquiteto fala 4 linguas');
  }

  void cozinhar() {
    print('faz omellete');
  }
}

abstract class Tabuada {
  void somar();
  void subtrair();
}

abstract class tabuadaAvancada {
  void multiplicar();
  void dividir();
}

class AlunoBom implements Tabuada, tabuadaAvancada {
  @override
  void somar() {
    print('sabe somar');
  }

  void subtrair() {
    print('subtrai');
  }

  void multiplicar() {
    print('multiplica');
  }

  void dividir() {
    print('divide');
  }
}

class AlunoMedio implements Tabuada {
  @override
  void somar() {
    print('soma');
  }

  void subtrair() {
    print('subtrai');
  }
}

void main() {
  /**----------------------------modificado FINAL ----------------------*/
  //final: modificador que dá exclusividade a sua instancia
  // ou seja não deixa o objeto ser modificado
  // tenta modifica-lo não funciona
//   final Conta conta1 = new Conta(agencia: 1226, numero: 12345, banco: 'BB');

//   print(conta1.banco);
//   print(conta1.agencia);
//   print(conta1.numero);
/**animais */
//   var toto = Cachorro();
//   toto.correr();
//
/**MEDICOS */
  // Medico john = new Medico();
  // john.falarLingua();
  // john.falar();
/** alunos */
  AlunoBom maria = new AlunoBom();
  AlunoMedio joao = new AlunoMedio();

  maria.somar();
  maria.subtrair();
  maria.multiplicar();
  maria.dividir();

  joao.somar();
  joao.subtrair();
}
