// Tarea 1:
// Preguntarle al usuario su nombre.
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const MI_NOMBRE = "nicolas";
const NOMBRE_PADRE = "dario";

const nombreUsuario = (prompt("¿Cual es tu nombre?") || "").toLowerCase();

// Si el nombre del usuario es el mismo que  el  de ustedes
if (MI_NOMBRE === nombreUsuario) {
  console.log("Hola, Tocayo! Yo tambien me llamo " + `${MI_NOMBRE}`);
} else if (NOMBRE_PADRE === nombreUsuario) {
  console.log("Hola " + `${nombreUsuario}` + " te llamas igual que mi padre");
} else if (nombreUsuario.trim().length === 0) {
  console.log("No ingresaste ningun nombre.");
} else {
  console.log("Hola! " + `${nombreUsuario}`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const MI_EDAD = 23;

const edadUsuario = Number(prompt("¿Cuantos años tenes?"));

if (edadUsuario < MI_EDAD) {
  console.log("Tenes " + `${edadUsuario}` + " Sos menor que yo!");
} else if (edadUsuario > MI_EDAD) {
  console.log("Tenes " + `${edadUsuario}` + " Sos mayor que yo!");
} else {
  console.log("Tenes " + `${edadUsuario}` + " la misma edad que yo!");
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const EDAD_MINIMA_USUARIO = 18;
const RESPUESTA_SI = 'si';
const RESPUESTA_NO = 'no';

const consultarDocumentoUsuario = (prompt("¿Tenes documentos?") || '').toLowerCase();

if (consultarDocumentoUsuario === RESPUESTA_SI) {
  const consultarEdadUsuario = Number(prompt("¿Cuantos años tenes?"));
  
  if (consultarEdadUsuario >= EDAD_MINIMA_USUARIO) {
    console.log("Podes ingresar, adelante.");
  } else if (consultarEdadUsuario < EDAD_MINIMA_USUARIO){
    console.log("No podes ingresar, volvé cuando seas mayor de edad");
  }else{
    console.log('No entiendo tu respuesta')
  }
} else if (consultarDocumentoUsuario === RESPUESTA_NO) {
  console.log("Disculpa, no podes ingresar al bar.");
} else {
  console.log("No entiendo tu respuesta");
}
