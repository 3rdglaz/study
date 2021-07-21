//  a - encontrar fatorial

function fatorial() {
    num = parseInt(document.getElementById("numero").value)
    let result = num
    if (num === 0 || num === 1) 
      result = 1; 
    while (num > 1) { 
        num--;
        result *= num;
    }
    
    document.getElementById("fatorial").innerHTML = `${result}`
}

// b - verificar se é primo

function primo() {
    let num = document.getElementById("primo").value
    if (num > 1) {
        for (let i = 2 ; i < num; i++){
            if(num % i == 0){
                document.getElementById("primoOut").innerHTML = `N primo`
                break;
            }
            else{
                document.getElementById("primoOut").innerHTML = `Primo`
            }
        }
    }
    else{
        document.getElementById("primoOut").innerHTML = `N Primo`
    }
}

// c - receber 3 números colocar em ordem crescente

function ordenar() {
    let nx = Array()
    nx.push(document.getElementById("numero1").value)
    nx.push(document.getElementById("numero2").value)
    nx.push(document.getElementById("numero3").value)
    document.getElementById("nx").innerHTML = nx.sort()    

}

// d - receber lista de nomes imprimir ordem alfabetica

let nList = Array()
function nomeList(){		
    // transfromei em maiúsculo pra não interferir a ordenação alfabética
    let item = document.getElementById('nomelist').value.toUpperCase()
    
    // avalia se item da lista é vazio 
    if  (document.getElementById('nomelist').value == ''){
        console.log("Valor inválido. Digite novamente.")
    }
    // se não for compara se há igual
    // tentei inicialmente fazer com laço for, oq add o item pela número do Index kkkk, uma hora ficaram 8 "CARNES" na lista
    else if ( document.getElementById('nomelist').value != ''){
        // SE está na lista cospe quano posição está
        if (nList.includes(item)) {
            console.log(`Item já existe na lista de compras na posição ${nList.indexOf(item)}`);
        }
        // Se não tiver pusha na lista na útlima posição
        else {
            nList.push(item)
            console.log(nList)
            // não adicionei esse pra tela não ficar cheia
            console.log(`${item} : inserido na posição  ${nList.indexOf(item)}`)
            // limpa o html do item
            // document.getElementById("nomelist").innerHTML = ``;
        }  
    }
    // limpa o input
    document.getElementById("nomelist").value = ``;  
}
//ordena em ordem alfabética, mostra em html e console.log
function orderList(){
    document.getElementById("list").innerHTML = `${nList.sort()}`;
}

// e - get input on vlues, put on array, print index nd value

let numeroList = Array()
function numList(){		
    // transfromei em maiúsculo pra não interferir a ordenação alfabética
    let item = parseInt(document.getElementById('numlist').value)
    
    // avalia se item da lista é vazio 
    if  (document.getElementById('numlist').value == ''){
        console.log("Valor inválido. Digite novamente.")
    }
    // se não for compara se há igual
    // tentei inicialmente fazer com laço for, oq add o item pela número do Index kkkk, uma hora ficaram 8 "CARNES" na lista
    else if ( document.getElementById('numlist').value != ''){
        // SE está na lista cospe quano posição está
        if (numeroList.includes(item)) {
            console.log(`Item já existe na lista de compras na posição ${numeroList.indexOf(item)}`);
        }
        // Se não tiver pusha na lista na útlima posição
        else {
            numeroList.push(item)
            console.log(numeroList)
            console.log(`${item} : inserido na posição  ${numeroList.indexOf(item)}`)
        }  
    }
    // limpa o input
    document.getElementById("numlist").value = ``;  
}
// ordenx os numeros e mostr index
function ordernumList(){
    for (let index = 0; index < numeroList.length; index++) {
        document.getElementById("numshow").innerHTML += `${index}:${numeroList[index]} | `;
        
        
    }
}
// f - get the median of 4 notes
function med(){
    let numerMed1 = parseFloat(document.getElementById("numeroMed1").value)
    let numerMed2 = parseFloat(document.getElementById("numeroMed2").value)
    let numerMed3 = parseFloat(document.getElementById("numeroMed3").value)
    let numerMed4 = parseFloat(document.getElementById("numeroMed4").value)
    console.log(numerMed1)
    console.log(numerMed2)
    console.log(numerMed3)
    let med = (numerMed1+numerMed2+numerMed3+numerMed4)/4
    document.getElementById("medis").innerHTML = `${med}`
}
// g - search array[0,17,2,4,6,23,50,32,80] nd then:
// -find biggest Number
// -find even number
// -find odd numbers
// -find numbers bigger thn 20
// -find smller dn bigger number
// -order crescent or descrescent order
let cntgm = [0,17,2,4,6,23,50,32,80]
function show() {
    let biggest= 0;
    let even = []
    let odd = []
    let bigger20= []
    let smaller = 0
    for (i=0; i<cntgm.length;i++){
        if (cntgm[i]>biggest) {
            biggest=cntgm[i];
        }
        if (cntgm[i]<smaller) {
            smaller=cntgm[i];
        }
        if (cntgm[i]%2 == 0){
            even.push(cntgm[i]) 
        }
        if (cntgm[i]%2 != 0){
            odd.push(cntgm[i]) 
        }
        if (cntgm[i]>20){
            bigger20.push(cntgm[i])
        }
        document.getElementById("cntgm").innerHTML = `
        Mior=${biggest}
        <br>Pres=${even.sort()}
        <br>Impres=${odd.sort()}
        <br>Mior que 20=${bigger20.sort()}
        <br>Menor=${smaller}
        <br>Ordem=${cntgm.sort()}`
}
}

// h - an array with 10 years, return leap year
let bixto = []
function bissexto(){
    for (let ano = 1994; ano < 2004 ; ano++) {
        if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)) {
            bixto.push(ano);
            console.log(ano)
        }
    }
    document.getElementById("bissexto").innerHTML = `${bixto.sort()}`
}
// i - find prime number from 0 to 100 and put in array then print

// ficou um Caos esse aqui

let prim100 = []
function primo100(){
   
    for (let numz = 1; numz < 101; numz++) {
        
        if (numz > 1) {
            for (let i = 2 ; i < numz; i++){
                if(numz % i == 0){
                    console.log('n')
                    break;
                }
                else{
                    if(prim100.includes(numz)){console.log('repetido')}
                    else{
                    prim100.push(numz)}
                }
            }
        }
        else{
            console.log('n')
        }
    }
    document.getElementById("primo100").innerHTML = `${prim100}`
}

