// Atividade 7 
function noClique(){
    alert('CLIQUE')
}

function menu() {
    let output = document.getElementById('output')
    let input = document.getElementById('input')
    switch (parseInt(code)) {

        // atividade A do calculo da area do circulo 
        case 1:

            let num = prompt(`Insira o numero: `);

            // validando 
            if (num < 0 || num == "") {

                obs = `A area não pode ser negativo `
            }
            else {
                // chamando a função e colocando na variável auxiliar 
                aux = areaCirculo(num)

                // atribuindo a resposta na variável obs 
                obs = `A area do circulo e: ${aux}m²`
            }
            break;

        case 2:

            // pegando o peso 
            let peso1 = prompt(`Insira o seu peso: `);

            // pegando o input da altura 
            let altura1 = prompt(`Insira a sua altura (Ex 1.80): `);

            // validando 
            if (peso1 <= 0 || peso1 == "" || altura1 <= 0 || altura1 == "") {

                obs = `Os campos nao podem estar faltando e não pode ser negativo `
            }
            else {
                // chamando a função 
                aux = pesoPessoa(peso1, altura1)

                // como na função ja tem explicação da saida so atribui na obs 
                obs = `${aux}`
            }
            break

        case 3:

            // pegando o numero da  raiz  
            let numRaiz = prompt(`Insira o Número: `);

            if (numRaiz < 0 || numRaiz == "") {

                obs = `A Raiz não pode ser negativo `
            }
            else {

                // chamando a função 
                aux = raizQuadrada(numRaiz);

                obs = `A raiz quadrada de ${numRaiz} e de: ${aux}`
            }
            break


        case 4:

            // pegando a base 
            let base = prompt(`Insira a base: `);

            // pegando a potencia 
            let potencia = prompt(`Insira a potencia: `);

            // validando 
            if (base == "" || potencia == "") {

                obs = `A Base ou potencia estão faltando `
            }
            else {
                // chamando a função 
                aux = calculoPotencia(base, potencia);

                obs = `O Calculo e de: ${aux}`
            }
            break


        case 5:
            // pegando o input 
            let num1 = prompt(`Insira o 1° numero: `)
            let num2 = prompt(`Insira o 2° numero: `)
            let num3 = prompt(`Insira o 3° numero: `)
            let num4 = prompt(`Insira o 4° numero: `)
            let num5 = prompt(`Insira o 5° numero: `)

            // validando 
            if (num1 == "" || num2 == "" || num3 == "" || num4 == "" || num5 == "" ||
                num1 < 0 || num2 < 0 || num3 < 0 || num4 < 0 || num5 < 0) {

                obs = `Números podem estar faltando ou serem negativos`
            }

            else {
                // pegando a função 
                aux = mediaPonderada(num1, num2, num3, num4, num5)

                obs = `O calculo da media Ponderada e de: ${aux}`
            }
            break


        case 6:

            // pegando a temperatura em fahrenheit 
            let calor = prompt(`Insira a temperatura em Fahrenheit: `)

            // validando 
            if (calor == undefined) {
                obs = `Campos  nao poder ser vazios`
            }
            else {

                // pegando a função 
                aux = temperatura(calor)

                obs = `A temperatura em Celsius: ${aux} `
            }
            break

        case 7:
            let salario = prompt(`Insira quanto ganha por hora`)

            let mes = prompt(`Insira  horas trabalhadas no mes: `)

            // validando 
            if (salario < 0 || salario == undefined || mes < 0 || mes == undefined) {
                obs = `Campos nao poder ser nulos e nao podem estar faltando `
            }

            else {
                aux = calculoSalario(salario, mes)

                obs = `Salário liquido com desconto de:<br>
                    Imposto de Renda  = 11% <br>
                    INSS = 8% <br>
                    Sindicato = 5% <br>
                    Salário liquido total e de: R$${aux.toFixed(2)}`
            }
            break


        case 8:

            let lado = prompt(`Insira o lado do triângulo: `)
            // validando 
            if (lado < 0 || lado == "") {

                obs = `Invalido`
            }
            else {
                aux = areaTriangulo(lado)

                obs = `A area do triângulo e de ${aux}`
            }

            break


        case 9:

            let cateto = prompt(`Insira o Cateto Oposto: `)

            let seno = prompt(`Insira o Seno: `)

            if (cateto <= 0 || cateto == "" || seno <= 0 || seno == "") {
                obs = `Valores com campo  faltando ou com valores negativos`
            }

            else {

                aux = hipotenusa(cateto, seno)

                obs = `O valor da hipotenusa e de: ${aux}`
            }
            break
    }

}
// a. calcular área de um circulo.
    function areaCirculo(raio){
        let raio = raio;
        let area = (raio*raio)*3.14;
        return (area);
    }

// b. peso ideal de uma pessoa (IMC)
    function pesoIdeal(altura){
        let h = (altura - 100)*0.9;
        let m = (altura - 100)*0.85;
        return saida.innerHTML = `Para homem = ${h}; Para mulher = ${m}`;
    }
// c. raiz quadrada de um numero (
    //  var numero = 101;
    //  var divisor = 1, dividido = 0;
    //  for (var  i = 0; i < numero; i++) {
    //     dividido = numero / divisor;
    //     divisor = (dividido + divisor) / 2;
    //   }
//  console.log(divisor);

// )


    function raizQuadrada(numero) {
        let raiz = numero ** 0.5
        return raiz    
    }

// d. potência de um número( i = 0/    if i >num2: num1=num1 * num1; i++)
    function potencia(base,potencia){
        let i = 0
        while (i<potencia){
            base = base*base
            i++
        }
        return base
    }
// e. média ponderada 5 números ( (n1*1+n2*2+n3*3+n4*4+n5*5)/10=media)
    function mediaPonderada(n1,n2,n3,n4,n5){
        let n1,n2,n3,n4,n5
        let media = (n1*1+n2*2+n3*3+n4*4+n5*5)/15
        return media
}
// f. fahrenheit para celsius( celsius= (fahren-32)/1.8000)
    function grau(fahren){
        let celsius = (fahren - 32)/1.8;
        return celsius;
    }


// g. salário liquido de um trabalhador(

    function salario(salario){
        if (salario <= 1100) {
            inss = salario*.075
        }
        else if (salario <= 2203.48){
            inss = salario*0.09
        }
        else if (salario <= 3305.48){
            inss = salario*0.12
        }
        else if (salario <= 6433.57){
            inss = salario*0.14
        }
        else if (salario > 6433.57){
            inss = 751.99
        }
        return inss
    }
// h. area de um triangulo equilatero ( area = ((lado*lado)/4)*1.7)
    function areaTriangulo(lado){
        let area = ((lado*lado)/4)*1.7;
        return area;

    }
// i. valor da hipotenusa de triangulo (hipotenusa= catetoOposto/seno)
    function hipotenusa(catetoOposto,seno){
        let hipotenusa = catetoOposto/seno;
        return hipotenusa;
    }
// j. fim
















/*
//alert("alo")
var numero2 = 19
var numero1 = 10
//alert(numero1+numero2)
var list= ["maça","pera","laranja"]
console.log(list)//coloca no console
console.log(list.length)//coloca no console comprimento
console.log(list.toString())//coloca no console em forma de string, é uma função
console.log(list.join (" - "))//coloca no console separado por traço
*/


/*var fruta = {
                nome: "maça", 
                cor:"vermelha",
                sabor:"seila",
            }

console.log(fruta.nome)//chama na dicionário FRUTA o NOME
*/
/*
var frutas = [
    {
    nome: "maça", 
    cor:"vermelha",
    sabor:"seila",
},
    {
    nome: "uva", 
    cor:"roxa",
    sabor:"seila",
},
    {
    nome: "limao", 
    cor:"verde",
    sabor:"seila",
}
]

console.log(frutas[1].nome)// dessa maneira eu imprimo 
                            //na LISTA FRUTAS posição 1, o NOME
*/


/*
var idade = prompt("Qual a sua idade");//pergunta na tela
if (idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de idade")
}
*/
/*
var count = 0;
while (count<5){
    console.log(count);
    count++;
}

for (count=0;count <= 5; count++){
    console.log(count);
}

var d = new Date();
alert(d.getMonth()+1 + "/" +d.getDate()); //cospe mes e dia
*/

// let nomeDoAluno = prompt("NOME DO ALUNO: ");
// let faltas = prompt("NUMERO DE FALTAS: ");
// let n1 = parseInt(prompt("DIGITE NOTA 1: "));
// let n2 = parseInt(prompt("DIGITE NOTA 2: "));
// let n3 = parseInt(prompt("DIGITE NOTA 3: "));
// let n4 = parseInt(prompt("DIGITE NOTA 4: "));

// let media = (n1+n2+n3+n4)/4

// document.write(`Nome do aluno: ${nomeDoAluno}`);
// document.write(`Número de Faltas: ${faltas}`);
// document.write(`Notas: ${n1}:${n2}:${n3}:${n4}`);
// document.write(`Média do aluno: ${media}`);


// if (media >= 9 && faltas <3){
//     document.write("Situação: Aprovado com Mérito!")
//     document.write("Observação: Tudo certo com esse aluno!")
// }
// if (media >= 7 && media < 9){
//     document.write("Situação: Aluno Aprovado!")
//     document.write("Observação: Tudo certo com esse aluno!")
// }
// if (media >= 5 && media < 7){
//     document.write("Situação: Aluno em Recuperação!")
//     document.write("Observação: Enviar email para responsáveis!")
// }
// else if (media < 5){
//     document.write("Situação: Aluno Reprovado!")
//     document.write("Observação: Enviar email para responsáveis!");
//        
//
//
