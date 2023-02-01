let miVariable = 34;
let miArreglo = []; // declaracion literal
let miArreglo01 = new Array (); // por instancia

let miArreglo02 = [31,32,33,34];
console.log("dato de miArreglo en el índice 0 - " + miArreglo02[0]);
console.log("dato de miArreglo en el índice 1 - " + miArreglo02[1]);
console.log("dato de miArreglo en el índice 2 - " + miArreglo02[2]);
console.log("dato de miArreglo en el índice 3 - " + miArreglo02[3]);

console.log("El tamaño o número de elementos del arreglo es:" + miArreglo02.length);

let miArreglo03 = ["Hola", "qué", "tal"]
console.log(miArreglo03[0]);
console.log(miArreglo03[1]);
console.log(miArreglo03[2]);
console.log(miArreglo03[3]);

let miArreglo04 = [{name: "Hugo" }, {apellido:" Fernandez "},{edad: " 23 "}];
console.log("Elemento del arreglo de tipo objeto miArreglo04 " + miArreglo04[0].name );
console.log("Elemento del arreglo de tipo objeto miArreglo04 " + miArreglo04[1].apellido);
console.log("Elemento del arreglo de tipo objeto miArreglo04 " + miArreglo04[2].edad);
console.log("El tamaño de mi arreglo es: " + miArreglo04.length);

let newArreglo00 = [3,6,9,4];
console.log("Orden de miArreglo nuevo con sort: " + newArreglo00.sort());
console.log("Orden de miArreglo nuevo con método pop(): " + newArreglo00.pop());
console.log("Orden de miArreglo nuevo con método reverse: " + newArreglo00.reverse());
console.log("Javascript" ,[2]);
 console.log("JavaScript".length)   

 let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ];
 console.log("Tamaño " + matriz.length);
 console.log(matriz[1][1]);
 console.log(matriz[2][1]);
}console.log(matriz[2][2]);





