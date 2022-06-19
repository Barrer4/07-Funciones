/* Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
Pediremos de qué figura queremos calcular su área y según lo introducido pedirá los
valores necesarios para calcular el área. Crea un método por cada figura para
calcular cada área, este devolverá un número entero(sin decimales). Muestra el
resultado por pantalla
a. Circulo: (radio^2)*PI
b. Triángulo: (base * altura) / 2
c. Cuadrado: lado * lado */


let figura = ((window.prompt('Por favor, indique de qué figura geométrica desea calcular el área: \n a. Círculo \n b. Triángulo \n c. Cuadrado').substring(0,1)).toLowerCase())




if (figura === 'a') {
    let radio = parseInt(window.prompt('Por favor, introduzca el valor del radio'))
    
    circulo(radio)

} else if (figura === 'b'){
    let base = parseInt(window.prompt('Por favor, introduzca el valor de la base'))
    let altura = parseInt(window.prompt('Por favor, introduzca el valor de la altura'))

    triangulo(base, altura)

} else if (figura === 'c'){
    let lado  = parseInt(window.prompt('Por favor, introduzca el valor del lado'))

    cuadrado(lado)
}else{
    window.alert('No ha introducido una opción válida')
}
    

function circulo(radio){
    return window.alert(parseInt(Math.PI*(radio**2)))
}


function cuadrado(lado){
    return window.alert(parseInt(lado**2))
}

function triangulo(base,altura){
    return window.alert(parseInt(base*altura)/2)
}
