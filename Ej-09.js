/* Crea una aplicación que nos cuente el número de cifras de un número entero
positivo (hay que confirmar que no haya introducido un número negativo y
deberemos quitar los decimales) pedido por teclado. Crea un método que realice
esta acción: pasando el número por parámetro, devolverá el número de cifras.
Después mostrar ese número en un alert. */




let num = Math.abs(parseInt(window.prompt('Por favor, introduzca un número')))

positive(num)

function positive(){
    return window.alert(num.toString().length)
}


//Aquí está corregido, pero inicialmente había utilizado console.log
