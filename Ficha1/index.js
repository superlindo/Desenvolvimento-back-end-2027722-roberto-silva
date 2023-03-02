//Implemente uma função que receba dois números e um operador ( + , - , * , / ou ^) e imprima o resultado 
//da operação sobre os números

function calculate(operand1,operand2,operator){
    var resultado = 0
    if (operator=="+")
        resultado=operand1+operand2;
    else if (operator=="-")
        resultado=operator1-operator2;
    else if (operator=="*")
        resultado=operator1*operator2;
    else if (operator=="/")
        resultado=operator1/operator2;
    else if(operator=="^");
        resultado=Math.pow(operator1,operator2);
    return resultado;  
}
console.log(calculate(10,3,"^"))


//implemente uma função que imprima todos os múltiplos de 5 menores que 20.

function multiplos() {
    for (let i = 0; i < 20; i++) {
      if (i % 5 == 0) {
        console.log(i);
      }
    }
  }


//Implemente uma função que imprima a soma dos primeiros 100 números inteiros.


  function soma_100_primeiros_inteiros() {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
      soma += i;
    }   
    console.log(soma);
  }
  
// Implemente uma função que calcule e devolva o fatorial de um número.

function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    return numero}
   
// Implemente várias funções para calcular o máximo, o mínimo e a média de uma sequência de números
//positivos

function minimum(array){
    var min=array[0];
    for (let i = 1; i<array.lenght; i++){
        if(array[i] < min)
            min=array[i];
    }
    return min;
}
function maximum(array){
    var max = array[0];
    for (let i = 1; i<array.lenght; i++){
        if(array[i] > min)
            max=array[i];
    }
    return max;
}
var array=[2,3,4,6,1,0]
var min = minimum(array);