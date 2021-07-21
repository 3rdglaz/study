// import 'dart:html';

class Animal {
  String cor;
  String raca;
  double peso;

  //construtor, o que até agora não faço ideia de como funciona
  Animal({this.cor = '', this.peso = 0.0, this.raca = ''});

  void farejar() {
    print('o animal ');
    print('fareja ');
    print('como um ');
  }
}

// para tornar a classe animal PAI das outras classes usar 'extends <animal>'
class Cachorro extends Animal {
  //método
  void latir() {
    print('auau');
  }

  //escreve após a função 'void.<metodo>()'
  //e usa com 'super.<metodo>()' tudo q já foi usado
  @override
  void farejar() {
    super.farejar();
    print('cachorro');
  }
}

class Gato extends Animal {
  //método
  void miar() {
    print('miau');
  }

  @override
  void farejar() {
    super.farejar();
    print('gato');
  }
}

void main() {
  Cachorro toto = new Cachorro();
  Gato felix = new Gato();

  toto.cor = 'marrom';
  felix.peso = 3.0;

  print('cor do dog é ${toto.cor}');
  print('o peso do gato é ${felix.peso}');
  toto.latir();
  felix.miar();
  print('-----------------');
  toto.farejar();
  felix.farejar();
}
