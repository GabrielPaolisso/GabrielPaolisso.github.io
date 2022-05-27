var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var error = document.getElementById('error')

function enviarFormulario(){
    console.log('Enviando formulario ...');

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }

    if(apellido.value === null || apellido.value === ''){
        mensajesError.push('Ingresa tu apellido');
    }

    if(empresa.value === null || empresa.value === ''){
        mensajesError.push('Ingresa tu empresa');
    }

    if(email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu email');
    }
    if(celular.value === null || celular.value === ''){
        mensajesError.push('Ingresa tu celular');
    }

    if(consulta.value === null || consulta.value === ''){
        mensajesError.push('Ingresa tu consulta');
    }

        error.innerHTML = mensajesError.join(', ');

    return false;
}
