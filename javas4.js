let btn4 = document.getElementById("boton4");    

function contarVocales(){ 
    
    const AreaTexto2 = document.getElementById("AreaTexto2").value;
        if(AreaTexto2 == ""){
            alert("Debes escribir al menos una letra");
            return
        }
        vocales = AreaTexto2.replace(/[^aeiouAEIOU]/g, '').length;

        if(vocales == ""){
            var Result4 = vocales
             document.getElementById('Resultado4').innerHTML = "la frase contiene 0 vocales" 
        }
        else {
        var Result4 = vocales
             document.getElementById('Resultado4').innerHTML = Result4 + " Vocal(s)"    
        }
} 

btn4.addEventListener("click",contarVocales,true);