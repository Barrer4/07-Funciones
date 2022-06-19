/* Crea un aplicación que nos convierta una cantidad de euros introducida por teclado
a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio.
a. 0.86 libras es un 1 €
b. 1.28611 $ es un 1 €
c. 129.852 yenes es un 1 € */

let euros = parseInt(window.prompt('Por favor, introduzca la cantidad de euros a convertir'))

let moneda = parseInt(window.prompt('Por favor, indique el tipo de moneda que desea: \n 1 - Libras (£) \n 2 - Dólares ($) \n 3 - Yenes (¥)'))

cambioEuros(euros, moneda)

function cambioEuros(euros,moneda){
    if (moneda === 1){
        window.alert(`${euros} equivalen a ${euros * 0.86} libras`)
    }else if (moneda === 2){
        window.alert(`${euros} equivalen a ${euros * 1.28611} dolares`)
    }else if (moneda === 3){
        window.alert(`${euros} equivalen a ${euros * 129.852} yenes`)
    }else{
        window.prompt('No ha introducido una opción válida')
    }
}
