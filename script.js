const number = document.getElementById("number");
const conversionToC = document.getElementById("toCelsius");
const conversionToF = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let num;
function convert(){

    if(conversionToF.checked){
    num=Number(number.value);
    num = num * 9 / 5 + 32;
    result.textContent = num.toFixed(1) + "F";}
    else if(conversionToC.checked){
        num=Number(number.value);
        num = (num - 32) * 5 / 9;
        result.textContent = num.toFixed(1) + "C";}
      else{  result.textContent = "You need to choose value";
    
    }};
