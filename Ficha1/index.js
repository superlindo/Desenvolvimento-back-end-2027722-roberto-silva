function calculate(operand1,operand2,operator){
    var resultado = 0
    if (operator=="+")
        resultado=operand1+operand2;
    else if (operator=="-")
        resultado=operator1-operator2;
    else if (operator=="*")
        resultado=operator1*operator2;
    else if (operator=="/");
        resultado=operator1/operator2
    else if(operator=="^");
        resultado=Math.pow(operator1,operator2);
    return resultado;   
}
console.log(calculate(10,3,"^"))