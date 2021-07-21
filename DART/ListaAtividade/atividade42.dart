import 'dart:io';

void main() {
  /**input até 1000, mostra quantas centenas dezenas e unidades */
  print('Digite um número: ');
  int n = int.parse(stdin.readLineSync()!);
  int centena = 0;
  int dezena = 0;
  int unidade = 0;
  if (n > 1000) {
    print('Limite ultrapassado');
  } else {
    print('calculando centenas ...');
    while (n > 100) {
      n = n - 100;
      centena++;
    }
    print('calculando dezenas ...');
    while (n > 10) {
      n = n - 10;
      dezena++;
    }
    print('calculando unidades ...');
    while (n > 0) {
      n = n - 1;
      unidade++;
    }

    if (centena > 0) {
      print('contem: $centena centenas, $dezena dezenas e $unidade unidades');
    } else if (dezena > 0) {
      print('contem:$dezena dezenas e $unidade unidades');
    } else {
      print('contem: $unidade unidades');
    }
  }
}

// ATIVIDADE 41
//data com dia/mes/ano confirmar se é valida

  //if mes 2 && 28 dias true
  //if mes 2 && 29 dias && bissexto true
  //if mes 4 6 9 11 && dias <= 30 true
  //if dias <= 31 true
  // else false
//----------------------

/**
 * atividade 43 já realizada no passado pega notas divide por 3 e qualifica de acordo com a média.
 * ----------------------------------------
 * atividade 44 segue o mesmo raciocinio da 42, com inclusão de algum passo a mais.
 * ---------------------------------------------
 * atividade 47 junta a ativ45 e ativ46 num switch. basicamente.
 * ------------------------------------------
 * atividade 48 um conjunto de input que soma numa variavel pra retornar a resposta da participação do crime
 * ------------------------------------------
 * atividade 50 é similar a atividade49, mais do mesmo, porém os valores se somam num total final.
 * ------------------------------------------
 * atividade 51 é o mesmo processo
 * -----------------------------------------
 * atividade 52 é uma soma da atividade 42 + 49
 * ------------------------------------------
 * atividaed 53 um loop for onde o index é definido pelo número de itens:pode se somar, ou usar como variavel multiplicadora. for(i=1;i>itens;i++){};total=i*1.99;
 * ------------------------------------------
 * atividade 54 mesma lógica da 53, o valor do item altera.
 * ---------------------------------------
 * atividade 56 um loop que decresce e multiplica.
 * ---------------------------------------
 * atividade 57 
 * pede um número de dados para rodar o loop
 * no loop anota as temperaturas com ifs para maiorTemp e menorTemp,
 * soma temperaturas/número de dados
 * ------------------------------------------
 * atividade 58
 * 
 */