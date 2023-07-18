var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Frase: ", function(answer) {
    var resp = answer;
    leitor.close();
    let array_padrao = resp.split("")
    var array = []
    for(i = 0; i < array_padrao.length; i++){
        if(array_padrao[i] != ' '){
            array.push(array_padrao[i])
        }
    }
    console.log(array)
});

