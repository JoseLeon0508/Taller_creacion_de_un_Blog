
function esPalindromo(texto){
    return texto.split('').reverse().join('') == texto;      
}
console.log(esPalindromo("perro"));