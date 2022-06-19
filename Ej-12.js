/* Escribe una función a la que le pasamos un año y devuelve true si es bisiesto. En el
programa principal, pídele al usuario un número y muestra en pantalla “El año … es
bisiesto” o “El año … no es bisiesto” y sigue pidiendo números y diciendo si es o no
bisiesto hasta que introduzca un 0. Un año es bisiesto si es divisible entre 4, pero no
si es divisible entre 100 pero si es divisible entre 400 sí lo es. */


let year

bisiesto(year)



function bisiesto(year){
do{
    year = parseInt(window.prompt('Por favor, introduzca un año. Ej: 1980'))
        if(year%4 === 0 && year%100 !==0){
            window.alert(`El año ${year} es bisiesto`)
        }else if(year%400 === 0){
            window.alert(`El año ${year} es bisiesto`)
        }else{
            window.alert(`El año ${year} no es bisiesto`)
        }
}while(year != 0)
}
