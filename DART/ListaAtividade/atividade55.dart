import 'dart:io';

void main() {
  int itemIndex = 1;
  double valor = 0;
  bool fim = false;
  double total = 0;
  while (fim == false) {
    print('digita valor');
    valor = double.parse(stdin.readLineSync()!);
    print('Item $itemIndex: $valor');
    total += valor;
    if (valor == 0.0) {
      fim = true;
      print('total $total');
      // e assim usa o programa de trocos
    }
  }
}
