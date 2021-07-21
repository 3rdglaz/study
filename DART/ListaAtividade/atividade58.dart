import 'dart:io';

void main() {
  print('insira um Inteiro:');
  bool primo = true;
  int numero = int.parse(stdin.readLineSync()!);
  for (var i = 2; i < numero; i++) {
    if (numero % i == 0) {
      primo = false;
    }
  }
  if (primo == false) {
    print('Não é primo');
  } else {
    print('é primo');
  }
}
