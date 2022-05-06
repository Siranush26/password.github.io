let upper=document.getElementById("upper");
let lower=document.getElementById("lower");
let numm=document.getElementById("number");
let symbol=document.getElementById("symbol");
let pass=document.getElementById("pass");
let button=document.getElementById("button");
let length_slider=document.getElementById("length");
let pwd=document.getElementById("pwd");
let copy=document.getElementById("copy");

let lowercase = "abcdefghijklmnopqrstuvwxyz",
      uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers = "0123456789",
      symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


function leng(){
    pwd.innerHTML=length_slider.value;
}


function generate(){
    let user="";
    let password="";
    
  
    if (upper.checked) {
        password += uppercase;
      }
    
    if (lower.checked) {
      password += lowercase;
      }

      if (numm.checked) {
        password += numbers;
      }
      if (symbol.checked) {
        password += symbols;
      }

      
      for (let i=0; i<length_slider.length; i++) {
        user += password.charAt(Math.floor(Math.random() * password.length))
    }
       return user
    }


    



/*
const randomFunc={
    upp:getUpper,
    low:getLower,
    nummm:getNum,
    sym:getSymbol,
}
*/



