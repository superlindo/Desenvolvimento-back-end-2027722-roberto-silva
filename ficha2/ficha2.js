// Escreva uma função que calcule o índice de massa corporal de uma pessoa e imprima a sua condição física.
//A fórmula contém o peso em kg e a altura em metros.

function condicao_fisica(peso,altura){

    var imc = peso/(altura)**2;
    console.log("O seu IMC é: "+ imc);

    if (imc < 18.5)
        console.log("Abaixo do peso"+ imc);

    else if(imc >= 18.5 && imc < 25)
        console.log("no peso normal"+ imc)

    else if(imc >= 25 && imc < 30)
        console.log("acima do peso"+imc)

    else if(imc >= 30)
        console.log("obeso"+imc)
}
condicao_fisica(80,1.87)

//Escreva uma função que dada uma frase imprima a mesma frase por ordem inversa.
//a. Por exemplo: Entrada: Hoje e Domingo Saída: ejoH e ognimoD


function reverseString(str){
    var splittedStr = str.split(" ");
    var reverseStr=" ";
    for (let i = 0; i < splittedStr.length;i++){
        for (let j = splittedStr[i].length -1; j>=0;j--){
            reverseStr+=splittedStr[i][j]; 
        }
        reverseStr+=" ";           
    }
    return reverseStr;
}
var str = "Hoje é Domingo";
var rev = reverseString(str);
console.log(rev);