for (let i = 1; i < 11; i++) {
    document.getElementById("itemOut").innerHTML = `<h3> Tabuada de ${i}<br>`;
    for (let j = 1; j < 11; j++) {
        document.getElementById("itemOut2").innerHTML = `${i} * ${j} = ${i*j}`;
        
    }
    
}