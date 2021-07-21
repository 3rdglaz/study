function somarValores() {
    var s1 = document.getElementById("txt1").value;
    var s2 = document.getElementById("txt2").value;
    var s3 = document.getElementById("resultado")
    s3.innerText = ` O resultado é ${(parseInt(s1) + parseInt(s2))}`;
    //document.Write(`${parseInt(s3)}`);
   // alert(s3);
}
function media(){
    let nota = prompt('informe nota do aluno: ')
    let media = 7
    let resposta = ''

    //impressão
    document.write(`Valor da note é: ${nota}`);
    document.write(`<br>`);
    document.write(`Valor da média`);
    document.write(`Valor da média é: ${media}`);
    document.write(`<br>`);
    document.write(`<hr>`);

    //condicional
    if (nota === media){
        reposta = 'Aprovado'
    }else{
        resposta = 'Reprovado'
    }

    document.write(resposta);
}