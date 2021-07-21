class Veiculo {
  //atributos
  String veiculo;
  int velocidade;
  int contador = 0;
  // método construto
  Veiculo(this.veiculo, this.velocidade);

  //acelera
  acelerar() {
    while (contador <= velocidade) {
      contador += 10;
      print('$veiculo acelera $contador km/h');
    }
  }

  /******freia */
  frear() {
    if (contador >= velocidade) {
      print('Limite atingido, reduzindo...');

      while (contador != 0) {
        contador -= 10;
        print('$veiculo reduz $contador km/h');
      }
    }
    if (contador == 0) {
      print('$veiculo parou.');
    }
  }
}
