import 'dart:io';

void main() {
//     // divisao_resultado_inteiro é igual a 2
//   var divisao_resultado_inteiro = 5 ~/ 2;
//  print('o resultado inteiro de divisão é $ {divisao_resultado_inteiro}');

// // modulo é igual a 1
// var modulo = 9 % 2;
// print('o resto de divisão(modulo) é $ {modulo}');
  print('insira um numero:');
  int n = int.parse(stdin.readLineSync()!);
  if (n % 2 == 0) {
    print('é par');
  } else {
    print('é ímpar');
  }
}
