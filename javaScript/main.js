//Busqueda en la página
let etiquetas = document.getElementsByTagName("h2");
console.log(etiquetas[0].innerText);
console.log(etiquetas[1].innerText);


//Cambio de frase original
let frase2 = document.getElementById("frase")
console.log(frase2.innerText)
frase2.innerText = "La naturaleza puede sobrevivir sin nosotros. Nosotros no podemos sobrevivir sin ella."
console.log(frase2.innerText);