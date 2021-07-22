// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0]
  // Devuelve el primer elemento de un array
  // Tu código:
}


function devolverUltimoElemento(array) {
  return array[array.length - 1]
  // Devuelve el último elemento de un array
  // Tu código:
}


function obtenerLargoDelArray(array) {
    return array.length
  // Devuelve el largo de un array
  // Tu código:
}


function incrementarPorUno(array) {
  array2 = []
  for(i = 0; i < array.length ; i++) {
  array2[i] = array[i] + 1 
  } 
  return array2
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento)
  return array
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}


function agregarItemAlComienzoDelArray(array, elemento) {
    array.unshift(elemento)
    return array
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}


function dePalabrasAFrase(palabras) {
  var str = palabras[0]  
for(i = 1; i < palabras.length; i++) {
str = str + " " + palabras[i] 
}
return str
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}


function arrayContiene(array, elemento) {
  for(i = 0; i < array.length; i++) {
    if(array[i] === elemento) {
        return true
    } 
    }
return false
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}


function agregarNumeros(numeros) {
  total = 0
  for(i = 0; i < numeros.length; i++) {
total = total + numeros[i] 
  } 
return total
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}


function promedioResultadosTest(resultadosTest) {
  var total = 0
    for(i = 0; i < resultadosTest.length; i++) {
total = total + resultadosTest[i] 
    }
return Math.round(total / resultadosTest.length)
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}


function numeroMasGrande(numeros) {
                     //2, 1, 5, 7, 3
  var numeroMax = numeros[0]
       //2         //2
    for(i = 1; i < numeros.length; i++) {
     if(numeros[i] > numeroMax) {
    //1, 3, 5, 7, 3     2
        numeroMax = numeros[i];
     }//           1, 3, 5, 7, 3
    } 
return numeroMax
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}


function multiplicarArgumentos() {
  var total = 1
    if(arguments.length < 1) {
      return 0
    } for(i = 0; i < arguments.length; i++) {
        total = total * arguments[i]
    } return total
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
}


function cuentoElementos(arreglo){
  var contador = 0;
  for(i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 18) {
      contador++
    }
  } return contador
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

}


function diaDeLaSemana(numeroDeDia) {
    switch(numeroDeDia) {
      case 1:
        return "Es fin de semana";
      case 2:
        return "Es dia Laboral";
      case 3:
        return "Es dia Laboral";
      case 4:
        return "Es dia Laboral"; 
      case 5:
        return "Es dia Laboral";   
      case 6:
        return "Es dia Laboral";
      case 7:
        return "Es fin de semana";     
    }
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
} 


function empiezaConNueve(n) {
  var i = []; 
i[0] = n + "" ;
  if(i[0][0] === "9") {
    return true
  } else if(i[0][0] !== "9") {
    return false
  } 
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
}


function todosIguales(arreglo) {
  for(i = 0; i < arreglo.length - 1; i++) {
    if(arreglo[i] !== arreglo[i+1]) {
      return false
    }
  }
  return true
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {
  var array2 = []
    for(i = 0; i < array.length; i++) {
      if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") { 
        array2.push(array[i])
      } 
    }
    if (array2.length < 3) { 
        return "No se encontraron los meses pedidos"
    }  
    return array2
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  var nuevoArray = []
    for(i = 0; i < array.length; i++) {
      if(array[i] > 100) {
        nuevoArray.push(array[i])
      }
    } return nuevoArray
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  var array = []
  var nuevoNum = numero + 0
    for(i = 1; i < 11 ; i++) {
      nuevoNum = nuevoNum + 2;
      array.push(nuevoNum);
    if(nuevoNum === i) {
        return "Se interrumpió la ejecución"
    }
    }
return array
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  var array = []
  var nuevoNum = numero + 0
    for(i = 1; i < 11 ; i++) {
    if(i === 5) {
        continue;
    } else {
        nuevoNum = nuevoNum + 2;
        array.push(nuevoNum);
    }
    }
return array
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
