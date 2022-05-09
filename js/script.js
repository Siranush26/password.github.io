const form = document.querySelector("form")

form.onsubmit = (e) => {
    e.preventDefault()
    console.log("submit")
}

let upper=document.getElementById("upper");
let lower=document.getElementById("lower");
let numm=document.getElementById("number");
let symbol=document.getElementById("symbol");
let pass=document.getElementById("pass");
let button=document.getElementById("button");
let length_slider=document.getElementById("length");
let pwd=document.getElementById("pwd");
let copy=document.getElementById("copy");

 let lowercase = "abcdefghijklmnopqrstuvwxyz";
 let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let numbers = "0123456789";
 let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


//let charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

function leng(){
    pwd.innerHTML=length_slider.value;
}


button.addEventListener("click", () =>{
    let pwdd="";
   
    if (upper.checked) {
      
      pwdd += uppercase;
     
      }
    
    if (lower.checked) {
      pwdd += lowercase;
      }

      if (numm.checked) {
        pwdd += numbers;
      }
      if (symbol.checked) {
        pwdd += symbols;
      }


    pass.value=generatePassword(length_slider.value,pwdd)
    });

    const generatePassword = (length_slider, pwdd) => {
    let pass = "";
  
    for (let i = 0; i < length_slider; i++) {
      pass += pwdd.charAt(
        Math.floor(Math.random() * pwdd.length_slider)
      );
      /*
        pass += uppercase.charAt(
        Math.floor(Math.random() * pwdd.length_slider)
      );
       pass += lowercase.charAt(
        Math.floor(Math.random() * pwdd.length_slider)
      );
       pass += numbers.charAt(
        Math.floor(Math.random() * pwdd.length_slider)
      );
       pass += symbols.charAt(
        Math.floor(Math.random() * pwdd.length_slider)
      );
      */
    }
    return  pass;
  }
  
  function myFunction() {
   
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }


    

