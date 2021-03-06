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

```

6- Escreva um função recursiva para calcular o máximo divisor comum de dois números

```c

```
