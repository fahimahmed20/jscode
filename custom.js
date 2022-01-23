var grade = parseInt(prompt('Write a grade'));

if(grade >= 0 && grade <= 39){
    console.log('Sorry You are fail');
}
else if(grade <= 49){
    console.log("You got GPA 'E'");
}
else if(grade <= 54){
    console.log("You got GPA 'D'");
}
else if(grade <= 59){
    console.log("You got GPA 'D+'");
}
else if( grade <= 64 ){
    console.log("You got GPA 'C'");
}
else if(grade <= 69){
    console.log("You got GPA 'C+'");
}
else if(grade <= 74){
    console.log("You got GPA 'B'");
}
else if(grade <= 79){
    console.log("You got GPA 'B+'");
}
else if(grade <= 84){
    console.log("You got GPA 'A-'");
}
else if(grade <= 89){
    console.log("You got GPA 'A'");
}
else if(grade <= 100){
    console.log("you got 'A+'");
}else{
    console.log('you input a wrong number');
}