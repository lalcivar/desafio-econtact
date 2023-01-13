/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

var nombre1 = "Luis Alberto"

function largoDelNombre(nombre) 
{
	if (typeof nombre === 'string') 
	{
	 let longitud = 0;
	 longitud = nombre.length;
	   if (longitud >= 0 && longitud <= 5)
	   {
	     var resultado = 'Es un nombre corto. Su largo es de: ' + longitud;	
         return(resultado);
       }
	   else if (longitud >= 11)
	   {
		 var resultado = 'Es un nombre largo. Su largo es de: ' + longitud;
		 return(resultado);
	   }
	 
    }
	else
	{
	  var resultado = 'El parámetro recibido es invalido';	
      return(resultado);	
	}	
}
console.log(largoDelNombre(nombre1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

let arreglo1 = ['luis',18,'alberto',11,20];

function contarTipoNumber(arreglo) 
{
	let longitud = arreglo.length;
	let contador = 0;
	let resultado = '';
	
	for (let i=0; i<longitud;i++)
	{
		if(typeof arreglo[i] === 'number')
		{
			contador = contador + 1;
		}
	}
	resultado = 'La cantidad de numeros en su arreglo es: ' + contador;
	return (resultado);
	
}

console.log(contarTipoNumber(arreglo1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

let persona1 = {
                nombre:'Yamil',
				edad:30,
				altura:'1 mtr 60 cm'
               };


function datosPersona(persona) 
{
	let resultado ='';
	resultado = "Esta persona se llama " + persona.nombre + ", tiene " + persona.edad + " años y su altura es de " + persona.altura;
	return(resultado);
}

console.log(datosPersona(persona1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

let numeroInicial = 1;
let numeroFinal = 100;

function obtenerCantidadDePares(numero1, numero2) 
{

let contador = 0;
let resultado = '';
	for(let i=numeroInicial; i <= numeroFinal; i++)
	{
		let residuo = i%2;
		if(residuo === 0)
		{
			contador = contador + 1;
		}
	}

return("La cantidad de números pares obtenido fue de: " + contador);
	
}

console.log(obtenerCantidadDePares(numeroInicial,numeroFinal));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */

const objetoFijo = 
{
  empresa: "E-Contact",
  datos: 
  {
    empleados: 100,
    direccion: 
	{
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: 
	[
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: 
	{
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};


function obtenerCantidadDeSedes(econtact) 
{
 let contador = 0;
 let resultado = '';
  for(let item in objetoFijo.datos.sedes) 
  {
   
   +item;
   contador = contador + 1;
  }
  resultado = 'La cantidad de sedes que posee Econtact son: ' + contador
  return (resultado);
}

console.log(obtenerCantidadDeSedes(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */

const objetoFijo = 
{
  empresa: "E-Contact",
  datos: 
  {
    empleados: 100,
    direccion: 
	{
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: 
	[
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: 
	{
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};


function obtenerTelefonoPeru(econtact) 
{
 let sede = '';
 let tel = '';
 let resultado = '';
  for(let item in objetoFijo.datos.sedes) 
  {
   
   sede = item;
   
   if (sede === 'Peru')
   {
	  tel = objetoFijo.datos.sedes.Peru.telefono;
	  if (tel === null)
	  {
		  resultado = "Perú no tiene asignado un teléfono";
		  return(resultado);
	  }
	  else
      {
		 resultado = "El numero de teléfono de Perú es: " + tel;
		 return(resultado); 
	  }
	  
	  break;
   }
   
  }
  
}

console.log(obtenerTelefonoPeru(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

const objetoFijo = 
{
  empresa: "E-Contact",
  datos: 
  {
    empleados: 100,
    direccion: 
	{
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: 
	[
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: 
	{
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

function obtenerPaisesConTelefono(econtact) 
{ 

 let resultado = '';
 let contador = 0;

 for(let item in objetoFijo.datos.sedes) 
 {
   
   sede = item;
   
   if (sede === 'Chile')
   {
	  let tel = objetoFijo.datos.sedes.Chile.telefono;
	  if (tel !== null)
	  {
		  contador = contador + 1;
	  }
	 
   }
   
   if (sede === 'Peru')
   {
	  let tel = objetoFijo.datos.sedes.Peru.telefono;
	  if (tel !== null)
	  {
		  contador = contador + 1;
	  }
	 
   }
   
   if (sede === 'EEUU')
   {
	  let tel = objetoFijo.datos.sedes.EEUU.telefono;
	  if (tel !== null)
	  {
		  contador = contador + 1;
	  }
	 
   }
   
   if (sede === 'Ecuador')
   {
	  let tel = objetoFijo.datos.sedes.Ecuador.telefono;
	  if (tel !== null)
	  {
		  contador = contador + 1;
	  }
	 
   }
   
   
   if (sede === 'Colombia')
   {
	  let tel = objetoFijo.datos.sedes.Colombia.telefono;
	  if (tel !== null)
	  {
		  contador = contador + 1;
	  }
	 
   }
   
 }
   
  resultado = 'La cantidad de paises que cuentan con telefono asignado son: ' + contador;
  return(resultado);
}

console.log(obtenerPaisesConTelefono(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

let oper = '+';
let num1 = 30;
let num2 = 50;

function calculoMatematico(operacion, numero1, numero2) 
{
let resutado = 0;

if(operacion === '+' || operacion === '-' || operacion === '*' || operacion === '/')
{

   if(operacion === '+')
   {
	 let suma = 0;
	 suma = numero1 + numero2;
	 resutado = 'el resultado de la suma es: ' + suma
	 return(resutado);
	
   }

   if(operacion === '-')
   {
	 let resta = 0;
	 resta = numero1 - numero2;
	 resutado = 'el resultado de la resta es: ' + resta
	 return(resutado);
	 
   }

   if(operacion === '*')
   {
	 let multiplicacion = 0;
	 multiplicacion = numero1 * numero2;
	 resutado = 'el resultado de la multiplicacion es: ' + multiplicacion
	 return(resutado);
	
   }
   
   if(operacion === '/')
   {
	 let division = 0;
	 division = numero1 / numero2;
	 resutado = 'el resultado de la division es: ' + division
	 return(resutado);
	 
   }
}  
else
{
	resutado = 'La operación matemática que intenta realizar es inexistente'
	return(resutado);
}	
  
   
}

console.log(calculoMatematico(oper, num1, num2));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

let num1 = [4];

function cargarArreglo(numero) 
{
	
let resultado;

  if(numero[0] > 0)
  {
	 let doble =  numero[0] * 2;
	 let contador = numero[0];
	 
	 while (contador < doble)
     {
       contador = contador + 1;
       numero.push(contador);
	   
     }
	 resultado = "Su arreglo contiene los siguientes valores: " + numero;
	 return(resultado);		
  }	
  else
  {
	resultado = "El número ingresado debe ser mayor a 0";
    return(resultado);
  }
  
}

console.log(cargarArreglo(num1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

let numeros1 = [5,10,15,20,22,24,30];

function divisiblesPorCinco(numeros) 
{
	let longitud = numeros.length;
	let divisible5;
	let contador = 0;
	let resultado;
	
	for(let i=0; i<longitud; i++)
	{
		divisible5 = numeros[i]%5;
		
		if(divisible5 === 0)
		{
		  	contador = contador + 1;
		}
	}
	
	resultado = 'La cantidad de números divisibles para 5 son: ' + contador;
	return(resultado);
}

console.log(divisiblesPorCinco(numeros1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

let numeros1 = [2,2,2,2,2,2,2];

function sumatoria(numeros) 
{
	let longitud = numeros.length;
	let suma = 0;
	let resultado;
	
	for(let i=0; i<longitud; i++)
	{
				
		suma = suma + numeros[i];
		
	}
	
	resultado = 'La suma total dentro de su arreglo es: ' + suma;
	return(resultado);
}

console.log(sumatoria(numeros1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */

const objetoFijo = 
{
  empresa: "E-Contact",
  datos: 
  {
    empleados: 100,
    direccion: 
	{
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: 
	[
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: 
	{
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

function verificarCantidadEmpleados(econtact) 
{ 

 let resultado = '';
 let CantidadEmpleados = econtact.datos.empleados;
 let CantidadEmpleadosSede = 0;

 for(let item in econtact.datos.sedes) 
 {
 
   let sede = item;
   
   if (sede === 'Chile')
   {
	  CantidadEmpleadosSede = CantidadEmpleadosSede + econtact.datos.sedes.Chile.empleados;
   }
   
   if (sede === 'Peru')
   {
	  CantidadEmpleadosSede = CantidadEmpleadosSede + econtact.datos.sedes.Peru.empleados;
   }
   
   if (sede === 'EEUU')
   {
	  CantidadEmpleadosSede = CantidadEmpleadosSede + econtact.datos.sedes.EEUU.empleados;
   }
   
   if (sede === 'Ecuador')
   {
	  CantidadEmpleadosSede = CantidadEmpleadosSede + econtact.datos.sedes.Ecuador.empleados;
   }
   
   
   if (sede === 'Colombia')
   {
	  CantidadEmpleadosSede = CantidadEmpleadosSede + econtact.datos.sedes.Colombia.empleados;
   }
   
 }
   
  if(CantidadEmpleados === CantidadEmpleadosSede)
  {
	 return(true); 
  }
  else
  {
	return(false);  
  }  
  
}

console.log(verificarCantidadEmpleados(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];

function calcularCuadrados(arreglo) 
{
   let longitud = arreglo.length;
   let nuevoArregloFijo = [];
   let cuadrado = 0;
   let resultado = '';
   
   for(let i=0;i<longitud;i++)
   {
	   cuadrado = arreglo[i] ** 2;
	   nuevoArregloFijo.push(cuadrado);
   }
   resultado = 'Su nuevo arreglo es: ' + nuevoArregloFijo
   return(resultado);
}

console.log(calcularCuadrados(arregloFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

let numeros1 = [100, 3, 4, 7, 12];

function validarArreglo(numeros) 
{
   let longitud = numeros.length;
  
  if(longitud >= 6)
  {
	let suma = 0;
	
    for(let i=0;i<longitud;i++)
    {
	   suma = suma + numeros[i]; 
    }
	
	if(suma > 100)
	{
	  return(true);
	}
	else
	{
	 return(false);
	}
  }
  else
  {
	return(false);  
  } 
   
}

console.log(validarArreglo(numeros1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

let nombres1 = ["Luis", "Carlos", "Elias", "Cristian"];
var nombre1 = "Luis";


function validarNombre(nombres,nombre) 
{
	let longitud = nombres.length;
	let bandera = 'No';
	
	for(let i=0;i<longitud;i++)
    {
	   if(nombres[i] === nombre)
	   {
	    bandera = 'Si';
	   } 
    }
	
	if(bandera === 'Si')
	{
	    return(true);
	}
	else
    {
	   return(false);  
    } 
}

console.log(validarNombre(nombres1,nombre1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

let numeros1 = [1,2,3,4,5,6,7];
let numero1 = 6;

function devolverPosicion(numeros, numero) 
{
	let longitud = numeros.length;
	let bandera = 'No';
	let posicion = 0;
	let resultado;
	
	for(let i=0;i<longitud;i++)
    {
	   if(numeros[i] === numero)
	   {
	    bandera = 'Si';
		posicion = i;
	   } 
    }
	
	if(bandera === 'Si')
	{
	    resultado = 'La posición de ese valor en el arreglo es: ' + posicion;
		return(resultado);
	}
	else
    {
	    resultado = 'No existe';
		return(resultado);  
    } 
	
}

console.log(devolverPosicion(numeros1,numero1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

const objetoFijo = 
{
  empresa: "E-Contact",
  datos: 
  {
    empleados: 100,
    direccion: 
	{
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: 
	[
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: 
	{
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

let sector1 = 'Contabilidad1';

function verificarSector(econtact, sector) 
{
	let longitud = econtact.datos.sectores.length;
	let bandera = 'No';
	
	for(let i=0;i<longitud;i++)
    {
	   if(econtact.datos.sectores[i] === sector)
	   {
	    bandera = 'Si';
	   } 
    }
	
	if(bandera === 'Si')
	{
		return(true);
	}
	else
    {
		return(false);  
    } 
	
}

console.log(verificarSector(objetoFijo,sector1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */

const objetoFijo = 
{
  empresa: "E-Contact",
  datos: 
  {
    empleados: 100,
    direccion: 
	{
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: 
	[
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: 
	{
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

let cantidad1 = 15;

function verificarCantidadEmpleados(econtact,cantidad) 
{
 let resultado = '';
 let contador = 0;
 let CantidadEmpleadosSede = 0;


 for(let item in econtact.datos.sedes) 
 {
 
   let sede = item;
   
   if (sede === 'Chile')
   {
	  CantidadEmpleadosSede = econtact.datos.sedes.Chile.empleados;
	  
	  if (CantidadEmpleadosSede < cantidad)
	  {
		  contador = contador + 1;
	  }
	  
   }
   
   if (sede === 'Peru')
   {
	  CantidadEmpleadosSede = econtact.datos.sedes.Peru.empleados;
	  
	  if (CantidadEmpleadosSede < cantidad)
	  {
		  contador = contador + 1;
	  }
	  
   }
   
   if (sede === 'EEUU')
   {
	  CantidadEmpleadosSede = econtact.datos.sedes.EEUU.empleados;
	  
	  if (CantidadEmpleadosSede < cantidad)
	  {
		  contador = contador + 1;
	  }
	  
   }
   
   if (sede === 'Ecuador')
   {
	  CantidadEmpleadosSede = econtact.datos.sedes.Ecuador.empleados;
	  
	  if (CantidadEmpleadosSede < cantidad)
	  {
		  contador = contador + 1;
	  }
	  
   }
   
   
   if (sede === 'Colombia')
   {
	  CantidadEmpleadosSede = econtact.datos.sedes.Colombia.empleados;
	  
	  if (CantidadEmpleadosSede < cantidad)
	  {
		  contador = contador + 1;
	  }
	  
   }
   
 }
   
  resultado = 'La cantidad de sedes que tengan una cantidad de empleados menor a la cantidad son: ' + contador;
  return(resultado);
  
}

console.log(verificarCantidadEmpleados(objetoFijo,cantidad1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */

const objeto1 = {nombre:'Juan',edad:35, profesion:'programador'};
let clave1 = "nombre";

function verificarClave(objeto, clave) 
{
	if(objeto[clave] === undefined)
	{
        return(false);
    }
	else
	{
        return(true);
    }
}

console.log(verificarClave(objeto1, clave1));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */

const arregloNumerosReales1 = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

function quitarParteDecimal(arregloNumerosReales) 
{
	let longitud = arregloNumerosReales.length;
	let ArregloNumerosEnteros = [];
	let SinDecimales;
	
	for(let i=0;i<longitud;i++)
	{
		SinDecimales = Math.trunc(arregloNumerosReales[i]);
		ArregloNumerosEnteros.push(SinDecimales);
	}
	
	return(ArregloNumerosEnteros);
}


console.log(quitarParteDecimal(arregloNumerosReales1));
