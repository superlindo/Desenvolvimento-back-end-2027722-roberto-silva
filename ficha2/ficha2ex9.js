var student1={name:"pedro alves", grade:16, number:677};
var student2={name:"ana maria", grade:10, number:678};
var student3={name:"joão  pedro", grade:8, number:679};
var student4={name:"carla martim", grade:18, number:680};
var student5={name:"joana silva", grade:6, number:681};

var studentList = [];

studentList.push(student1);
studentList.push(student2);
studentList.push(student3);
studentList.push(student4);
studentList.push(student5);


function max(array){
    var m = array[0].grade;
    var bestStudent = array[0];
    for (let i=0; i<array.length;i++){
        if (array[i].grade>m){
            m=array[i].grade;
            bestStudent=array[i];
        }
    }
    return bestStudent;
}

console.log(max(studentList));

function min(array){
    var m = array[0].grade;
    var worstStudent = array[0];
    for (let i=0; i<array.length;i++){
        if (array[i].grade<m){
            m=array[i].grade;
            worstStudent=array[i];
        }
    }
    return worstStudent;
}

console.log(min(studentList));

function averageGrade(studentList){
    var sum=0;
    for (let i = 0; i < studentList.length; i++) {
        sum += studentList[i].grade;      
    }
    var average = sum / studentList.Lenght;
    return average
}
console.log(averageGrade(studentList))   


function closestToAverage(studentList){
    var avg = averageGrade(studentList);
    var min = avg;
    var student = studentList[0];
    for(let i = 0; i < studentList.lenght; i++){
        var diff = Math.abs(avg-studentList[i].grade);
        if (diff<min){
            min=diff;
            student=studentList[i];
        }
    }
    return student;
}
console.log(closestToAverage(studentList))


function ListaNegativos(array){
    var count=0;
    for(var i=0;i<array.lenght;i++){
        if(array[i].grade < 9.5){
            count++;
        }
    }
    return count
}

function ListaPositivos(array){
    var count=0;
    for(var i=0;i<array.lenght;i++){
        if(array[i].grade >= 9.5){
            count++;
        }
    }
    return count
}