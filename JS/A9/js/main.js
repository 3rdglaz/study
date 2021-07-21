function foco(objeto) {
    objeto.style.backgroundColor = 'rgb(75, 129, 75)'	
}
function desfoco(objeto){
    let contagem = objeto.value.length
    if (contagem < 3) {
        document.getElementById('area').style.backgroundColor = 'rgb(190, 190, 18)'
        
    }else if (contagem >= 3) {
        document.getElementById('area').style.backgroundColor = 'rgb(58, 60, 196)'
    }
    
}