var year = parseInt(prompt('Write Down Year'));

if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
    console.log('true')
}else{
    console.log('This 1st condition');
}