### Lista de exercícios preparatória I Love YOU  II

  Aula 05/03/2021

1 - faça um alg. que leia 3 números e para cada um deles imprimir o seu dobro. somente será valido se realizado através de uma função e o resultado impresso no fim do alg.

```c
int dobro(int x)
{
    int result;
    result = x * 2;
    return result;
}
void main()
{
    int n1, n2, n3;
    printf("Digite o primeiro numero: ");
    scanf("%i", &n1);
    printf("Digite o segundo numero: ");
    scanf("%i", &n2);
    printf("Digite o terceiro numero: ");
    scanf("%i", &n3);
    printf("\nO dobro do primeiro numero e: %i", dobro(n1));
    printf("\nO dobro do segundo numero e: %i", dobro(n2));
    printf("\nO dobro do terceri numero e: %i", dobro(n3));
}
```

2 - Faça um programa que receba as notas de três provas e calcule a média. Para o cálculo, escreva uma função. O programa deve imprimir a média ao final.

```c
int media(int x, int y, int z)
{
    int result;
    result = (x + y + z) / 3;
    return result;
}
void main()
{
    int n1, n2, n3;
    printf("Digite a primeiro nota: ");
    scanf("%i", &n1);
    printf("Digite a segundo nota: ");
    scanf("%i", &n2);
    printf("Digite a terceiro nota: ");
    scanf("%i", &n3);
    printf("\nA media e: %i", media(n1, n2, n3));
}
```

3 - Faça um programa que leia o saldo e o % de reajuste de uma aplicação financeira e imprimir o novo saldo após o reajuste. O cálculo deve ser feito por uma função.

```c
float reajuste(float x, float y)
{
    float result;
    result = x + (x * (y / 100));
    return result;
}
void main()
{
    float n1, n2;
    printf("Digite o saldo: ");
    scanf("%f", &n1);
    printf("Digite a porcentagem do reajuste: ");
    scanf("%f", &n2);

    printf("\nSaldo atualizado: %.2f", reajuste(n1, n2));
}
```

4 - Na pandemia a economia esta baixa..., os comerciantes estão procurando aumentar suas vendas oferecendo desconto. Faça um programa que permita entrar com o valor de um produto e o percentual de desconto e imprimir o novo valor com base no percentual informado. Para fazer o cálculo, implemente uma função.   

```c
#include <stdlib.h>
#include <stdio.h>

float desconto(float x, float y)
{
    return x - (x * (y / 100));
}
void main()
{
    float n1, n2;
    printf("Digite valor do produto: ");
    scanf("%f", &n1);
    printf("Digite a porcentagem do desconto: ");
    scanf("%f", &n2);

    printf("\nProduto atualizado: %.2f", desconto(n1, n2));
}
```

5 - Implemente um programa que leia uma mensagem e um caractere. Após a leitura, o programa deve, por meio de função, retirar todas as ocorrências do caractere informado na mensagem colocando * em seu lugar. A função deve também retornar o total de caracteres retirados. Ao final, o programa deve imprimir a frase ajustada e a quantidade de caracteres substituídos.

```c
#include <stdlib.h>

char convert(char x[100])
{
    int i;
    for (i = 0; i < (strlen(x)) - 1; i++)
    {
        x[i] = '*';
    }
    return printf("%s", x);
}
void main()
{
    char pal[100], saida[100];
    int ctgm;
    printf("Digite uma palavra: ");
    fflush(stdin);
    fgets(pal, 100, stdin);
    ctgm = strlen(pal);
    printf("Substituin %i caracteres...\n", ctgm - 1);
    printf("Convertendo . . . : ");
    printf(convert(pal));
}
```

6- Escreva um função recursiva para calcular o máximo divisor comum de dois números

```c

```

7- Faça um programa que leia os catetos (dois catetos) de um triângulo retângulo e imprima a hipotenusa. Para fazer o cálculo,
implemente uma função. Utilize a fórmula a seguir. o menor valor e incrementada em uma unidade até que seja igual ao valor final.

```c
#include <stdlib.h>
#include <math.h>
#include <stdio.h>

double hipotenusa(float x, float y)
{
    double result;
    result = sqrt(pow(x, 2) + pow(y, 2));
    return printf("%.2f", result);
}
void main()
{
    int x, y;
    printf("insira os catetos, separe por ENTER: \n");
    scanf("%i", &x);
    scanf("%i", &y);
    hipotenusa(x, y);
}
```

7. Faça um programa que verifique quantas vezes um número é divisível por outro. A função deve receber dois parâmetros, o dividendo e o divisor. Ao ler o divisor, é importante verificar se ele é menor que o dividendo. Ao final imprima o resultado.

8. Construa um programa que leia um valor inteiro e retorne se a raiz desse número é exata ou não. Escreva uma função para fazer a validação. Ao final imprima o resultado.

9. A matriz dados contém na 1ª coluna a matrícula do aluno; na 2ª, o sexo (0 para feminino e 1 para masculino); na 3ª, o código do curso, e na 4ª, o CR (coeficiente de rendimento). Faça um programa que armazene esses dados sabendo-se que o código do curso é uma parte da matrícula: aascccnnn (aa ano, s semestre, ccc código do curso e nnn matrícula no curso). Além disso, um grupo empresarial resolveu premiar a aluna com CR mais alto de um curso cujo código deverá ser digitado. Suponha 10 alunos e que o CR é umnº inteiro.

10. Supondo que uma matriz apresente em cada linha o total de produtos vendidos ao mês por uma loja que trabalha com cinco tipos diferentes de produtos, construir um programa que leia esse total e, ao final, apresente o total de produtos vendidos em cada mês e o total de vendas por ano por produto.

11. Escreva um software que gerencie uma cadeia de estoques de 5 produtos em 5 armazéns de uma empresa, conforme figura abaixo:
![image](https://user-images.githubusercontent.com/17899929/110713116-1e8ac380-81e0-11eb-9823-3a8df912300b.png)

O programa deverá ler o número da linha e da coluna, correspondente ao produto no armazém, e a quantidade a ser retirada do estoque. Caso a quantidade solicitada for menor ou igual a quantidade em estoque, o programa deverá emitir uma mensagem de atendimento e dar baixa no estoque. Do contrário
