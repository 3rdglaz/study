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

let nomeDoAluno = prompt("NOME DO ALUNO: ");
let faltas = prompt("NUMERO DE FALTAS: ");
let n1 = parseInt(prompt("DIGITE NOTA 1: "));
let n2 = parseInt(prompt("DIGITE NOTA 2: "));
let n3 = parseInt(prompt("DIGITE NOTA 3: "));
let n4 = parseInt(prompt("DIGITE NOTA 4: "));

let media = (n1+n2+n3+n4)/4

document.write(`Nome do aluno: ${nomeDoAluno}`);
document.write(`Número de Faltas: ${faltas}`);
document.write(`Notas: ${n1}:${n2}:${n3}:${n4}`);
document.write(`Média do aluno: ${media}`);


if (media >= 9 && faltas <3){
    document.write("Situação: Aprovado com Mérito!")
    document.write("Observação: Tudo certo com esse aluno!")
}
if (media >= 7 && media < 9){
    document.write("Situação: Aluno Aprovado!")
    document.write("Observação: Tudo certo com esse aluno!")
}
if (media >= 5 && media < 7){
    document.write("Situação: Aluno em Recuperação!")
    document.write("Observação: Enviar email para responsáveis!")
}
if (media < 5){
    document.write("Situação: Aluno Reprovado!")
    document.write("Observação: Enviar email para responsáveis!")
}
