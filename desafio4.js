//Este algoritmo lo pense en funcion de poder hacer un balance diario para la caja, al finalizar la jornada laboral me interesa saber los productos que vendi y agruparlos en funcion de mas valor a menos valor , tambien saber cual fue el total vendido y el precio con iva para analizar posibles cambios de precios.
//Primero creo un array vacio, el cual voy cargando nombre y precio del producto respectivamente, sabiendo la cantidad total de productos vendidos debido a tener un contador en el local , es decir el dato de cantidad es conocido al momento de cargar los productos. El objetivo esta en que me ordene la lista de mayor a menor para visualizar la mejor venta en funcion de la peor analizando sus precios ; que me muestre sus precios con iva para tener una mayor nocion de la carga impositiva que interactua con el precio final que simboliza todo lo recaudado en el dia.

//SUGERENCIA: [ {nombre : Lampara Vintage , precio: 1500 }
//            { nombre : Set de Espejos , precio: 3870 }
//            { nombre : Mesa Rustica , precio: 18000 }
//            { nombre : Alfombra Plumas , precio: 2100 }
//            { nombre : Porta vasos x12 , precio: 1000} ]

let productos = [];
class Productos {
    constructor(nombre,precio) {
        this.nombre = user.toUpperCase();
        this.precio = parseFloat(price);
    }
}
cantidad = prompt('Ingrese cantidad de productos vendidos en el dia');

for (let i = 0; i < cantidad; i++) {
    user = prompt('ingrese nombre del producto');
    price = prompt('ingrese precio del producto');
    price = price * 1.25;
    productos.push(new Productos('user','price'));
}
console.log('Productos vendidos en orden de mayor a menor de todo el dia:')
productos.sort( (a,b)=> {
    if (a.precio > b.precio) {
        return -1;
    }
    if (a.precio < b.precio) {
        return 1;
    }
    return 0; // a es igual a b
} ) //esta funcion me ordena elementos de mayor a menor
console.log(productos)
console.log('Total vendido ' + '$', + productos.reduce((acc,el) => acc + el.precio , 0))
