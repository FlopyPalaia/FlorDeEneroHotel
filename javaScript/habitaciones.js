//Reserva(input del usuario)
let habitación = document.getElementById("habitacion");

let estadia = document.getElementById("noches");

let pax = document.getElementById("pasajeros");

let fecha = document.getElementById("check-in");


//Carrito
let father = document.getElementById("carrito");

habitación.onchange = () => {
let contenedor1 = document.createElement("div");
contenedor1.innerHTML = `<h3> Habitación elegida: ${habitación.value}<h3>`;
father.appendChild(contenedor1);};

estadia.onchange = () => {
let contenedor2 = document.createElement("div");
contenedor2.innerHTML = `<h3> Cantidad de noches: ${estadia.value}<h3>`;
father.appendChild(contenedor2);};

pax.onchange = () => {
let contenedor3 = document.createElement("div");
contenedor3.innerHTML = `<h3> Cantidad de pasajeros: ${pax.value}<h3>`;
father.appendChild(contenedor3);};


//Calucador
let boton1 = document.getElementById("boton1");
boton1.addEventListener("click", calcular);
function calcular(){
    class Habitaciones {
        constructor (nombre, precio, pension) {
            this.nombre = nombre.toUpperCase();
            this.precio = parseInt(precio);
            this.pension = pension;
            this.vendido = false;
        }
    
        venderHab() {
            this.vendido = true; //indica true a la habitación que fue vendida
        }
    }
    
    const habitacion1 = new Habitaciones("Estandar", "12000", "Sin Pensión");
    const habitacion2 = new Habitaciones("Superior", "15000", "Media Pendión");
    const habitacion3 = new Habitaciones("Deluxe", "18000", "Media Pensión");
    const habitacion4 = new Habitaciones("Suite", "20000", "Pensión Completa")

    if(habitación.value == "Estandar" || habitación.value == "estandar"){
        habitacion1.venderHab();
    }
    else if(habitación.value == "Superior" || habitación.value == "superior"){
        habitacion2.venderHab();
    }
    else if(habitación.value == "Deluxe" || habitación.value == "deluxe"){
        habitacion3.venderHab();
    }
    else if(habitación.value == "Suite" || habitación.value == "suite"){
        habitacion4.venderHab();
    }
    console.log(habitacion1);
    console.log(habitacion2);
    console.log(habitacion3);
    console.log(habitacion4);
    
    let valor = 0;
    
    function cotizar(noches, pax, hab) {
        valor = noches * pax * hab;
    }
    
    if (habitación.value == "estandar" || habitación.value == "Estandar") {
        cotizar(estadia.value, pax.value, habitacion1.precio)
    }
    else if (habitación.value == "superior" || habitación.value == "Superior") {
        cotizar(estadia.value, pax.value, habitacion2.precio)
    }
    else if (habitación.value == "deluxe" || habitación.value == "Deluxe") {
        cotizar(estadia.value, pax.value, habitacion3.precio)
    }
    else if (habitación.value == "suite" || habitación.value == "Suite") {
        cotizar(estadia.value, pax.value, habitacion4.precio)
    }

    let tarifa = valor;

    let contenedor5 = document.createElement("div");
    contenedor5.innerHTML = `<h1> La tarifa a pagar es de $${tarifa}`;
    father.appendChild(contenedor5);
}


//Filtrar según...
const productos = [
    {nombre: "Estandar", precio: 12000, pension: "Sin Pensión"},
    {nombre: "Superior", precio: 15000, pension: "Media Pensión"},
    {nombre: "Suite", precio: 20000, pension: "Pensión Completa" },
    {nombre: "Deluxe", precio: 18000, pension: "Media Pensión"}
]

const resultado2 = productos.filter( (segun) => segun.precio < 15000 );
console.log(resultado2);

const resultado3 = productos.filter( (segun) => segun.precio > 15000 );
console.log(resultado3);

const resultado4 = productos.filter( (segun) => segun.pension.includes("Media") );
console.log(resultado4);


//Cambio de precio
const nuevosPrecios = productos.map( (segun) => {
    return {
        nombre: segun.nombre,
        precio: segun.precio * 1.5,
        pension: segun.pension
    }
} )
console.log(nuevosPrecios);


//Storage
localStorage.setItem('Habitación 1', 'Estandar sin ventana')
sessionStorage.setItem('Habitación 2', 'Superior con balcón')

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor)
}

for (const producto of productos) {
    guardarLocal(producto.nombre, JSON.stringify(producto));
}

guardarLocal("todosLosProductos", JSON.stringify(productos));

console.log(typeof localStorage.key(1))


//Operadores Avanzados
const producto = {
    nombre: "Estandar",
    precioxcomida: {
        sinPension: 12000,
        mediaPension: 14000
    }
}
const producto2 = {
    nombre: "Superior",
    precioxcomida: {
        sinPension: 15000,
        mediaPension: 17000,
        pensionCompleta: 18000
    }
}
const producto3 = {
    nombre: "Suite",
    precioxcomida: 20000
}

console.log(producto?.precioxcomida?.mediaPension || "Este esquema de comida no está disponible")
console.log(producto?.precioxcomida?.pensionCompleta || "Este esquema de comida no está disponible")

const desestructurar = (item) => {
        const{nombre, precioxcomida} = item;
        console.log(nombre, precioxcomida);
}
desestructurar(producto);

const desestructurar2 = ({nombre, precioxcomida}) => {
        console.log(nombre, precioxcomida);
}
desestructurar2(producto2)

const prueba = (producto.nombre == "Estandar") ? console.log(true) : console.log(false);
const prueba2 = (producto.nombre == "Superior") ? console.log(true) : console.log(false);

const prueba3 = (producto3.precioxcomida >= 20000) ? console.log("Con Pensión") : console.log("Sin Pensión");
const prueba4 = (producto3.precioxcomida < 20000) ? console.log("Con Pensión") : console.log("Sin Pensión");

//Json
fetch('../data.json')
.then( (res) => res.json())
.then( (data) => console.log(data))

class Productos {
    constructor (nombre, precio, id, pension) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.id = id
        this.pension = pension;
    }
}

let productos2 = []

fetch('../data.json')
.then( (res) => res.json())
.then( (data) => data.forEach((producto) => productos2.push(new Productos(producto.nombre, producto.precio, producto.id, producto.pension))))
console.log(productos2)


//Lista de productos Json en html
const lista = document.getElementById("productos")

fetch('../data.json')
.then( (res) => res.json())
.then( (data) => { data.forEach((producto) => {
let contenedor = document.createElement('li')
        contenedor.innerHTML = `
            <h5>Habitación: ${producto.nombre}</h5>
            <p> $ ${producto.precio}</p>
            <p>${producto.pension}</p>`
        lista.append(contenedor)
    })
})