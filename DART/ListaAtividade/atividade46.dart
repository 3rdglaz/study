import 'dart:io';

void main() {
  // só arredondei o número e comparei com o arredondamento
  print('insira um numero:');
  double n = double.parse(stdin.readLineSync()!);
  int side = (n).round();
  if (n == side) {
    print('é inteiro');
  } else {
    print('é decimal');
  }
}
