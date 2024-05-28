const number = document.getElementById("number");
const conversionToC = document.getElementById("toCelsius");
const conversionToF = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let num;
//Smallest code
convert = (num) =>{num=Number(number.value); if(conversionToF.checked) num = num * 9 / 5 + 32;
result.textContent = num.toFixed(1) + ` °F`;
  if(conversionToC.checked) num = (num - 32) * 5 / 9; result.textContent = num.toFixed(1) + ` °C`;
   return `You need to choose value`}


   
// function convert(){
//   num=Number(number.value);
//     if(conversionToF.checked) num = num * 9 / 5 + 32;
//       answer = result.textContent = num.toFixed(1) + " °F";
//      if(conversionToC.checked) num = (num - 32) * 5 / 9;
//           result.textContent = num.toFixed(1) + " °C";
//        return "You need to choose value";}


// function convert(){
//   num=Number(number.value);
    // if(conversionToF.checked){
    // num = num * 9 / 5 + 32;
    // result.textContent = num.toFixed(1) + " °F";}
    // else if(conversionToC.checked){
    //     num = (num - 32) * 5 / 9;
    //     result.textContent = num.toFixed(1) + " °C";}
    //   else{  result.textContent = "You need to choose value";
    
    // }};

 

