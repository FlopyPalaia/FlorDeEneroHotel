//Nombre ingresado
let inputNombre = document.getElementById("nombre");
inputNombre.onchange = () => {console.log("Nombre Ingresado: " + inputNombre.value)};

//Mail ingresado
let inputMail = document.getElementById("email");
inputMail.onchange = () => {console.log("E-mail Ingresado: " + inputMail.value)};

//Telefono ingresado
let inputTelefono = document.getElementById("telefono");
inputTelefono.onchange = () => {console.log("Telefono Ingresado: " + inputTelefono.value)};

//Habitación elegida
let inputHabitacion = document.getElementById("habitación");
inputHabitacion.onchange = () => {console.log("Habitación elegida: " + inputHabitacion.value)};

//Asistencia especial
let inputSino = document.getElementById("sino");
let si = document.getElementById("si");
let no = document.getElementById("no");

if(si.value = true){
    si.onchange = () => {console.log("Asistencia especial: si")};
};

if(no.value = true){
    no.onchange = () => {console.log("Asistencia especial: no")};
};

//Consultas
let inputConsultas = document.getElementById("consultas");
inputConsultas.onkeydown = () => {console.log("Apreto una tecla")};
inputConsultas.onchange = () => {console.log("El huesped dice: " + inputConsultas.value)};

//Newsletter
let inputNews = document.getElementById("news");
inputNews.onchange = () => {console.log("Recibir newsletters: " + inputNews.value)}

//Fecha del check-in
let inputFecha = document.getElementById("fecha");

//Enviar formulario
formulario.addEventListener("submit", validarHijos);
function validarHijos(e) {
    e.preventDefault ();
    console.log("Fecha del check-in: " + inputFecha.value);
    console.log("Formulario Enviado");
    Toastify({
        text: "Su reserva se completo con exito!",
        duration: 3000,
        style: {
            background: 'linear-gradient(to right, #00b09b, rgb(5, 128, 91))',
        },
        className: 'tostada'
    }).showToast();
}

//Datos borrados
let boton1 = document.getElementById("boton1");
boton1.addEventListener("click", borrar);
function borrar(){
    console.log("Eliminado");
}