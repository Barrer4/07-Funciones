/* Escribe un programa que pida al usuario dos números. Usa esos 2 números en una
función que divide el primero por el segundo y devuelve el resultado. Muestra el
resultado que devuelve la función en un alert. Después vuelve a pedir los números y
hacer todo otra vez hasta que el usuario introduzca un 0 como segundo número. */

let num1
let num2

do {
    num1 = parseInt(window.prompt('Por favor, introduzca un número'))
    num2 = parseInt(window.prompt('Por favor, introduzca otro número'))
    if (num2 != 0) {
        window.alert(divition(num1,num2))
    } 
}while(num2 !=0)


function divition(num1,num2){
    return num1/num2
}