//TAREA2: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

function showInformation() {
    let $firstName = document.querySelector('#first-name').value
    let $secondName = document.querySelector('#second-name').value
    let $lastName = document.querySelector('#last-name').value
    let $ageUser = document.querySelector('#age-user').value
    let $messageWelcome = `Welcome ${$firstName} ${$secondName}!`

    document.querySelector('#welcome').textContent = $messageWelcome

    let informationComplete =
        'First name: ' +
        $firstName +
        '\nSecond name: ' +
        $secondName +
        '\nLast Name: ' +
        $lastName +
        '\nAge: ' +
        $ageUser

    document.querySelector('#fieldText').value = informationComplete
}



