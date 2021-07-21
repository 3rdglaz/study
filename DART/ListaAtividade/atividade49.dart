import 'dart:io';

void main() {
// quando vi já tinha feito da maneira mais extensa, mas só copiei e alterei os valores.
  print('insira Litragem:');
  double litro = double.parse(stdin.readLineSync()!);
  print('Digite 1 para GASOLINA 2 para ALCOOL:');
  int tipo = int.parse(stdin.readLineSync()!);

  if (tipo == 1) {
    print('$litro L de GASOLINA:\n\t valor do litro: 2.50');
    if (litro > 20) {
      print(
          'valor: ${(litro * 2.5)}\tdesconto:${(litro * 2.5) * 0.05}\t total:${(litro * 2.5) - ((litro * 2.5) * 0.05)}');
    } else {
      print(
          'valor: ${(litro * 2.5)}\tdesconto:${(litro * 2.5) * 0.03}\t total:${(litro * 2.5) - ((litro * 2.5) * 0.03)}');
    }
  } else if (tipo == 2) {
    print('$litro L de ALCOOL:\n\t valor do litro: 1.90');
    if (litro > 20) {
      print(
          'valor: ${(litro * 1.9)}\tdesconto:${(litro * 1.9) * 0.06}\t total:${(litro * 1.9) - ((litro * 1.9) * 0.06)}');
    } else {
      print(
          'valor: ${(litro * 1.9)}\tdesconto:${(litro * 1.9) * 0.04}\t total:${(litro * 1.9) - ((litro * 1.9) * 0.04)}');
    }
  }
}
