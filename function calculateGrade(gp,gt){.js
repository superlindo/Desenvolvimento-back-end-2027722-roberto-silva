function calculateGrade(gp,gt){
    var grade = gp*0.6 + gt*0.4;
    if (grade >=  9.5)
        return true;
    else
        return false;  
}

var approval=calculateGrade(12,16);
if(approval)
    console.log("aprovado");
else
console.log("reprovado");
calculateGrade(8,8);
calculateGrade(12,10)


function getMonthName(monthNumber){
    var months=["Janeiro","Fevereiro"];
    if(monthNumber>0 && monthNumber <=12)
    console.log(months[monthNumber-1]);
    }
    // calculateGrade(8,8);
    getMonthName(1);




