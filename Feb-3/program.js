var num1=prompt("Enter the First Number");
num1=parseInt(num1);
var num2=prompt("Enter The num 2");
num2=parseInt(num2);
var operator=prompt("Enter the Sing + or *");
if(operator=="+"){
    
    console.log(`The Sum of two no is = ${num1+num2}`);
}
else if(operator=="*"){
    console.log(`The Sum of two no is = ${num1*num2}`);
}
else{
    alert("Please enter +  or *");
}