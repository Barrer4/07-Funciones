/* Diseña una función esPar() que reciba como parámetro un número y devuelva si ese
número es par o no. Utilízalo en un programa que lea un número por prompt y
determine si es par o no y muestre un mensaje al respecto en un alert. */

let num = parseInt(window.prompt('Por favor, introduzca un número'))

esPar(num)? window.alert(`${num} es un número par`) : window.alert(`${num} es un número impar`)

function esPar(){
    return num%2 === 0 
}

