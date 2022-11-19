
let btn = document.getElementById("boton");    

function esPalindromo(){ 
    
    const palabra = document.getElementById("Palabra").value;
        if(palabra == ""){
            alert("Escribe la Palabra");
            return
        }
    const reverse = palabra.split("").reverse();
    const results = palabra === reverse.join("") ? "Es Palindromo" : "No es Palindromo" 
   
    document.getElementById('Resultado').innerHTML = results;
     
} 

btn.addEventListener("click",esPalindromo,true);
