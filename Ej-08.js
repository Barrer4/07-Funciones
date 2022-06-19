/* Crea una aplicación que nos calcule el factorial de un número pedido por teclado, lo
realizará mediante una función al que le pasamos el número como parámetro. Para
calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
ejemplo, si introducimos un 5, realizará esta operación 5*4*3*2*1=120. Mostrar el
resultado en un alert. */



let num = parseInt(window.prompt('Por favor, introduzca un número'))
let f = 1


factorial(num)


function factorial(){
for (let i = num; i > 0; i--) {
    f *= i
}
return window.alert(factorial(num))
}
