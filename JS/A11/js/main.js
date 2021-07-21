function tela(n){
    let numero = document.getElementById('resultado').placeholder
    document.getElementById('resultado').placeholder = numero + n
}
function limpa() {
    document.getElementById('resultado').placeholder = ''
}
function calcula(){
    let resultado = document.getElementById('resultado').placeholder
    document.getElementById('resultado').placeholder = eval(resultado)
}