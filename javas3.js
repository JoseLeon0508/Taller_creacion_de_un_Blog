let btn3 = document.getElementById("boton3");    

function extraerVocales(){ 
    
    const AreaTexto = document.getElementById("AreaTexto").value;
        if(AreaTexto == ""){
            alert("Debes escribir al menos una letra");
            return
        }
        vocales = AreaTexto.replace(/[^aeiouAEIOU]/g, '');

        if(vocales == ""){
            var Result3 = vocales
             document.getElementById('Resultado3').innerHTML = "la frase no contiene vocales" 
        }
        else {
        var Result3 = vocales
             document.getElementById('Resultado3').innerHTML = Result3     
        }
} 

btn3.addEventListener("click",extraerVocales,true);