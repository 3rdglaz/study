import 'dart:io';

import 'dart:typed_data';

void main() {
  print('insira um Inteiro:');
  int numero = int.parse(stdin.readLineSync()!);
  print('insira um Inicio:');
  int inicio = int.parse(stdin.readLineSync()!);
  print('insira um Fim:');
  int fim = int.parse(stdin.readLineSync()!);
  print('tabuado do $numero de $inicio a $fim');
  for (inicio; inicio <= fim; inicio++) {
    print('$numero * $inicio = ${numero * inicio}');
  }
}
