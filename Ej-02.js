/* Escribe una función que escriba “Hola” tantas veces como el número que le
pasamos de parámetro. Llámala dos veces, primero con 5 y después con 3. */


let saludo = window.prompt('Por favor, introduzca un número')

hello(saludo)
hello(5)
hello(3)

function hello(saludo){
    for (let i = 0; i < saludo; i++) {
        console.log('Hola');   
    }
}





