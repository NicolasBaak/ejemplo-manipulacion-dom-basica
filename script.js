// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito'); //no es necesario agregar .
// const pid = document.getElementById('pid'); //no es necesario agregar el #
// const input = document.querySelector('input');

// console.log(
//     {
//         h1,
//         p,
//         parrafito,
//         pid,
//         input
//     }
// )

// console.log(input.value);

// h1.innerHTML = 'Titulo H1 <br> Salto de linea'; /*Tenemos etiquetas html,  ojo, cuidado con esta etiqueta porque asi los usuarios pueden insertar su html*/
// h1.innerText = "Esta es la manera para que nuestros usuarios no puedan insertar html malicioso";

// console.log(h1.getAttribute('pantalla')); /*lee el atributo especificado de la etiqueta*/
// console.log(h1.getAttribute('noExiste')); /*Si el atributo no existe, retorna null*/

// h1.setAttribute('class', "Rojo") /*Cambia el valor del atributo class que era verda a rojo*/

// h1.classList.add('verde'); /**añade una el valor a la etiqueta class */

// //h1.classList.toggle('verde');
// //h1.classList.contains('verde');

// input.value = "Estoy escribiendo el value";
// input.placeholder = "Movi el placeholder";

// //Crear elementos html nuevo

// const img = document.createElement('img'); //Creamos una imagen html
// img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

// console.log(img); //añadimos sus propiedaes

// pid.append(img); //lo añadimos dentro del parrafo seleccionado

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const p = document.querySelector("#result");
const form = document.querySelector("#form");

form.addEventListener("submit", SumarInputValues);

function SumarInputValues(event) {
  //automaticamente se envia a la función

  console.log(event);
  event.preventDefault(); //Evita que se envie el formulario a otra pagina
  var concatenacion = input1.value + input2.value;

  p.innerText = "Resultado: " + concatenacion;
}
