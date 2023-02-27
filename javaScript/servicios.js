//html creado con javaScript
let padre = document.getElementById("servicios");

let contenedor = document.createElement("div");
contenedor.innerHTML = `<h1>Servicios</h1>
                        <br>
                        <h3>Restaurante</h3>
                        <b>Abierto de 7:00 a 23:00</b>
                        <br>
                        <br>
                        <p>El restaurante tiene mesas adentro y afuera. Durante el invierno la parte externa del restaurante (patio semi cubierto) se cierra para dar lugar a un jardín de invierno en donde los huéspedes pueden disfrutar de sus comidas con vista al jardín, pero sin sufrir el frío.</p>
                        <p>Nuestro hotel cuenta con una huerta en la propiedad, por lo que la gran mayoria de los ingredientes utilizados en la cocina del restaurante son cosechados por nuestros chefs, garantizando su calidad.</p>
                        <p>Servimos platos típicos de la región, además de opciones vegetarianas y celíacas.</p>
                        <br>
                        <h3>Spa</h3>
                        <b>Abierto de 11:00 a 19:00</b>
                        <br>
                        <br>
                        <p>Se encuentra en el primer piso y es de uso exclusivo para los huéspedes del hotel. Incluye sauna seco, sauna húmedo, duchas escocesas, pileta climatizada con vista al jardín, masajes con aceites naturales y tratamientos faciales.</p>
                        <br>
                        <h3>Salón de Reuniones</h3>
                        <b>Abierto las 24 horas</b>
                        <br>
                        <br>
                        <p>Tiene capacidad para 50 personas, ideal para eventos corporativos y sociales. Consultar precios. Los huéspedes podrán utilizarlo como salón de trabajo cuando no haya ningún evento.</p>`;
padre.appendChild(contenedor);
