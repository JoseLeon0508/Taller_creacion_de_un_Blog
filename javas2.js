
let btn2 = document.getElementById("boton2");    

function esMayor(){ 
    
    var NumeroUno = document.getElementById("Numero1").value;
    var NumeroDos = document.getElementById("Numero2").value;
        if(NumeroUno == "" || NumeroDos == ""){
            alert("Escribe los dos numeros");
            return
        }
        if(NumeroUno == NumeroDos){
            alert("Los numeros son iguales, cambia los numeros");
            return
        }
        if(NumeroUno > NumeroDos){
           const Result1 = "El Numero Mayor es el: " + NumeroUno
            document.getElementById('Resultado2').innerHTML = Result1      
        }
        if(NumeroUno < NumeroDos){
            const Result2 = "El Numero Mayor es el: " + NumeroDos
             document.getElementById('Resultado2').innerHTML = Result2      
         }
    
} 

btn2.addEventListener("click",esMayor,true);
