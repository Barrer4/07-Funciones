/* Escribe una función que devuelva el resultado de sumar los dos parámetros que le
pasamos. Pide al usuario 2 números. Usa esos 2 números como parámetros de la
función y después asigna el valor que devuelve la función a una tercera variable.
Finalmente, muestra el valor de la variable en la consola. */


let par1 = parseInt(window.prompt('Por favor, introduzca un número'))
let par2 = parseInt(window.prompt('Por favor, introduzca otro número'))

suma(par1, par2)


function suma(){
    let par3 = par1 + par2
       
    console.log(par3)
}