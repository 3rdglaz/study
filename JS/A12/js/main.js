
let list = Array()
list[0] = 'FEIJÃO'
list[1] = 'ARROZ'

function addList(){
    
    // transfromei em maiúsculo pra não interferir a ordenação alfabética
    let item = document.getElementById('item').value.toUpperCase()
    
    // avalia se item da lista é vazio 
    if  (document.getElementById('item').value == ''){
        console.log("Valor inválido. Digite novamente.")
        document.getElementById("itemOut").innerHTML = "Valor inválido. Digite novamente."
    }
    // se não for compara se há igual com iteração
    else if ( document.getElementById('item').value != ''){
        // SE está na lista cospe quano posição está
        if (list.includes(item)) {
            
            document.getElementById("itemOut").innerHTML = `Item já existe na posição ${list.indexOf(item)}`
            console.log(`Item já existe na lista de compras na posição ${list.indexOf(item)}`);
        }
        // Se não tiver pusha na lista na útlima posição
        else {
            list.push(item)
            console.log(list)
            console.log(`${item} : inserido na posição  ${list.indexOf(item)}`)
            // limpa o html do item
            document.getElementById("itemOut").innerHTML = ``;
            // mostra item
            document.getElementById("itemOut").innerHTML = `${item}`;
            // mostra lista
            document.getElementById("list").innerHTML = `${list}`;
        }  
    }
    // limpa o input
    document.getElementById("item").value = ``;  
}
//ordena em ordem alfabética, mostra em html e console.log
function ordenar(){
    ordemAlfabetica = list.sort()
    console.log(list.sort())
    document.getElementById("list").innerHTML = `${list.sort()}`;
}