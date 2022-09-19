//html creado con javaScript
let padre = document.getElementById("servicios");

let contenedor = document.createElement("div");
contenedor.innerHTML = `<h1>Servicios</h1>
                        <br>
                        <h3>Restaurante</h3>
                        <b>Abierto de 7:00 a 23:00</b>
                        <br>
                        <br>
                        <p>Nuestro hotel cuenta con una huerta en la propiedad, por lo que la gran mayoria de los ingredientes utilizados en la cocina del restaurante son cosechados por nuestros chefs, garantizando su calidad.</p>
                        <p>Servimos platos típicos de la región, además de opciones vegetarianas y celíacas.</p>
                        <br>
                        <h3>Spa</h3>
                        <b>Abierto de Jueves a Sábado, de 11:00 a 16:00</b>
                        <br>
                        <br>
                        <p>Ofrecemos hidroterapia, masajes con aceites esenciales y sauna.</p>`;
padre.appendChild(contenedor);