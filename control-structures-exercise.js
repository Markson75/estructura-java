// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    // Tu código aquí
    
    if (numero % 2 === 0) {
        console.log('El numero es par')
    } else {
        console.log('El numero es impar')
    }

}

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    // Tu código aquí

    if (edad >= 18 && edad <= 65) {
        console.log('Adulto')
    } else if (edad > 65) {
        console.log('Adulto mayor')
    } else {
        console.log('Menor de edad')
    }

}

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    // Tu código aquí

    while (numero > -1) {
        console.log(numero)
        numero--
    }

}

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    // Tu código aquí

    let iter = 0
    do {
        console.log('Estoy aprendiendo JavaScript')
        iter++
    } while (iter < 5);

}

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    //código aquí

    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }

}

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    // Tu código aquí

    let contador = 0
    while (contador <= 10) {
        if (contador !== 6) {
            console.log(contador)
        } else {
            break
        }
        contador++
    }

}

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    // Tu código aquí

    let cont = 0
    while (cont <= 10) {
        if (cont !== 5) {
            console.log(cont)
        } else {
            cont++
            continue
        }
        cont++
    }

}

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    // Tu código aquí

    switch (dia) {
        case 1:
            console.log('Es Lunes!')
            break;
        case 2:
            console.log('Es Martes!')
            break;
        case 3:
            console.log('Es Miercoles!')
            break;
        case 4:
            console.log('Es Jueves!')
            break;
        case 5:
            console.log('Es Viernes!')
            break;
        case 6:
            console.log('Es Sabado!')
            break;
        case 7:
            console.log('Es Domingo!')
            break;
    
        default:
            console.log('Invalido')
            break;
    }

}

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    // Tu código aquí

    switch (letra) {
        case 'a':
            console.log('Es vocal')
            break;
        case 'e':
            console.log('Es vocal')
            break;
        case 'i':
            console.log('Es vocal')
            break;
        case 'o':
            console.log('Es vocal')
            break;
        case 'u':
            console.log('Es vocal')
            break;

        default:
            console.log('Es consonante')
            break;
    }

}

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    // Tu código aquí

    let todoPositivo = a > 0 && b > 0 && c > 0
    let todoNegativo = a < 0 && b < 0 && c < 0

    if (todoPositivo) {
        console.log('Todos son positivos')
    } else if (todoNegativo) {
        console.log('Todos son negativos')
    } else if (a < 0 || b < 0 || c < 0){
        if (a > 0 || b > 0 || c > 0) {
            console.log('Hay un negativo y un positivo')
        } else {
            console.log('Hay un negativo')
        }
    } else if (a > 0 || b > 0 || c > 0) {
        console.log('Hay un positivo')
    } else {
        console.log('Todos son cero')
    }
    
}

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};